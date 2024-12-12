Benefits of This File Structure
Separation of Concerns:

ThemeContext.tsx focuses on context creation and the provider.
useTheme.ts encapsulates the logic for using the context.
Components like ThemeSwitcher remain focused on UI and behavior.
Reusability:

The custom hook (useTheme) and context can be easily reused in other components.
Scalability:

Adding more contexts (e.g., UserContext, AuthContext) becomes straightforward by following a similar pattern.