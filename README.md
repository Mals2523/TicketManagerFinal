# Mini Ticket Manager App
This is a simple ticket management app .

It's a basic system where a manager can create new tickets and a technician can view and update their status. Everything is saved on the phone's local storage, so you won't lose your data if you close the app.

## What it does
**Manager & Technician roles**: You can easily switch between the two views.

**Create tickets**: The manager can add new tickets with a title and description.

**Update status**: A ticket goes from Open to Pre-Closed (by the technician) to Closed (by the manager).

**Saves your data**: I used AsyncStorage to make sure the tickets are still there when you restart the app.

## What I used to build it
**Framework**: React Native (with Expo)

**Language**: TypeScript

**Storage**: @react-native-async-storage/async-storage for saving data locally.

**State Management**: Just the basic React Hooks (useState and useEffect).

**How to get it running** 
1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/ticket-app.git
   cd ticket-app
2. npm install
3. npx expo start


