# AWS provider configuration
provider "aws" {
  region = "eu-west-2"  # Replace with your preferred AWS region
}

# Security group to allow SSH, MySQL, and HTTP traffic
resource "aws_security_group" "sg" {
  name        = "mysql-sg"
  description = "Allow SSH, MySQL, and HTTP traffic"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]  # Restrict SSH to your IP
  }

  ingress {
    from_port   = 3306
    to_port     = 3306
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]  # Restrict MySQL access
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]  # HTTP for Apache
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]  # Allow all outbound traffic
  }
}

# EC2 Instance with Apache, MySQL, and SSH Key Setup
resource "aws_instance" "server" {
  ami           = "ami-091f18e98bc129c4e"  # Ubuntu AMI (update to your region)
  instance_type = "t2.micro"
  key_name      = "31-Jan-2025-key-pair"  # Replace with your AWS key pair
  security_groups = [aws_security_group.sg.name]

  user_data = <<-EOF
            #!/bin/bash
            set -e  # Exit if any command fails

            # Update system and install required packages
            sudo apt update -y && sudo apt install -y apache2 openssh-server

            # Ensure SSH is running
            sudo systemctl enable ssh && sudo systemctl start ssh

            # Enable and start Apache
            sudo systemctl enable apache2 && sudo systemctl start apache2
            EOF

  tags = {
    Name = "bagisto-ec2-instance-ubuntu"
  }
}

# Output the public IP of the EC2 instance
output "instance_public_ip" {
  value = aws_instance.server.public_ip
}
