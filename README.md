# ncle-task

An Ionic/Angular app with capacitor project for NCLE org

## Prerequisites

- Node >v18.19.x
- Angular v18.0.0
- Ionic v8
- Capacitor v6

Clone the repo and install dependencies

```bash
# Clone the repository
git clone git@github.com:MoatazOsman/ncle-task.git

# Navigate into the project directory
cd ncle-task

# Install dependencies
npm install
```

## Available Scripts

Here are some of the NPM scripts defined in the root package.json:

- `npm start` - Start the app on [localhost](http://localhost:4200) .
- `npm run build` - Build the app.
- `npm run test` - Run tests for all components.
- `npm run lint` - Lint all components and pages of the app.

```plaintext
ncle-task/
┣ src/                      # Src Folder that include our logic
┃ ┣ app/                    # Include all pages and shared components
┃ ┃ ┣ components/        
┃ ┃ ┗ pages/
┃ ┣ assets/                 # Static assets like images, fonts
┃ ┃ ┣ fonts/                # App Fonts
┃ ┃ ┗ images/               # App Images
┃ ┣ environments/           # Include dev and prod environements variables
┃ ┣ theme/                  # Include Theme files
```

## Tools for better performance

- [Compress png Images](https://compresspng.com)
- [Convert png to webp](https://www.shutterstock.com/image-converter/png-to-webp)

## Notes

- if you faced an issue while build the android app like "The project is using an incompatible version (AGP 8.2.1) of
  the Android Gradle plugin. Latest supported version is AGP 8.1.2"
  try to update Android Studio to the latest version
