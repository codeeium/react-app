API Performance Tips -
1.Pagination
2.Asynchronous logging
3.Caching
4.Payload compression
5.Connection pooling
6.Lazy loading
7.images memoization
8.Throttling and Debouncing Events
9.Code-splitting
10.react fragments
11.web workers
12. useTransition hook
13. List Virtualization or Windowing


git clone --depth 1 https://github.com/your-repo.git

cd repo 

for branch in $(git branch -r | grep -v '\->'); do
git branch --track "${branch#origin/}" "$branch"
done

git fetch --all
git pull --all