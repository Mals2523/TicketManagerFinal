Mini Ticket Manager App
This is a simple ticket management app .

It's a basic system where a manager can create new tickets and a technician can view and update their status. Everything is saved on the phone's local storage, so you won't lose your data if you close the app.

What it does
Manager & Technician roles: You can easily switch between the two views.

Create tickets: The manager can add new tickets with a title and description.

Update status: A ticket goes from Open to Pre-Closed (by the technician) to Closed (by the manager).

Saves your data: I used AsyncStorage to make sure the tickets are still there when you restart the app.

What I used to build it
Framework: React Native (with Expo)

Language: TypeScript

Storage: @react-native-async-storage/async-storage for saving data locally.

State Management: Just the basic React Hooks (useState and useEffect).

How to get it running
What you'll need
Node.js on your computer.

The Expo Go app on your phone (from the App Store or Play Store).

Setup
Clone the code:

git clone <your-repository-url>
cd <your-project-directory>

Install the packages:
Run these commands in your terminal.

npm install
npx expo install @react-native-async-storage/async-storage

Run the app
Start the server:

npx expo start

Scan the QR code:
Make sure your computer and phone are on the same Wi-Fi. Open the Expo Go app on your phone and scan the QR code that shows up in your terminal. The app should open right up.
