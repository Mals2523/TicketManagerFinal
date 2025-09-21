import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#a0cfe5ff" },
  header: {
    padding: 10,
    alignItems: "center",
  },
  headerTitle: { fontSize: 22, fontWeight: "bold"},
  secttionTitle:{fontSize:20,fontWeight:"bold",marginVertical:10,fontFamily:"Montserrat-Bold"},
  roleSwitcher: { flexDirection: "row" },
  roleButton: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#eee",
    marginHorizontal: 7,
  },
  activeRole: { backgroundColor: "#76b1f1ff" },
  roleText: { color: "#000000ff", fontWeight: "bold",fontFamily:"Montserrat-Bold" ,fontSize:14},
  content: { padding: 20 },
  form: { marginBottom: 20 },
  input: {
    borderWidth: 2,
    borderColor: "#000000b4",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: "#7aaee6ff",
    padding: 7,
    borderRadius: 5,
    alignItems: "center",
  },
  addButtonText: { color: "#fff", fontWeight: "bold" },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
  ticketCard: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#eee",
  },
  ticketHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  ticketTitle: { fontSize: 16, fontWeight: "bold" },
  ticketStatus: { fontSize: 14, color: "#2B6CB0" },
  ticketDescription: { fontSize: 14, color: "#555", marginBottom: 10 },
  actionButton: {
    backgroundColor: "#2B6CB0",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  actionButtonText: { color: "#fff", fontWeight: "bold" },
});


export default styles;