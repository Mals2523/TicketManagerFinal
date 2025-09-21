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
    backgroundColor: "#c78f8fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#eb1b1bff",
  },
  ticketHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  ticketTitle: { fontSize: 16, fontWeight: "bold" },
  ticketStatus: { fontSize: 15, color: "#0a0a0aff",fontWeight: "bold" },
  ticketDescription: { fontSize: 14, color: "#3a3a3aff", marginBottom: 10 },
  actionButton: {
    backgroundColor: "#6caff7ff",
    
    borderRadius: 8,
    alignItems: "center",
    marginTop: 5,
    paddingHorizontal: 10,
    paddingVertical: 3,

  },
  actionButtonText: { color: "#030303ff", fontWeight: "bold" },
});


export default styles;