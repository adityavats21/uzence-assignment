import InputField from "./components/InputField";
import DataTable, { Column } from "./components/DataTable";

// ✅ Define row type for the table
type Person = {
  id: number;
  name: string;
  age: number;
  role: string;
};

function App() {
  // ✅ Data with correct typing
  const data: Person[] = [
    { id: 1, name: "Aditya", age: 22, role: "Developer" },
    { id: 2, name: "Riya", age: 24, role: "Designer" },
    { id: 3, name: "Sam", age: 21, role: "Intern" },
  ];

  // ✅ Columns typed with Column<Person>
  const columns: Column<Person>[] = [
    { key: "name", title: "Name", dataIndex: "name", sortable: true },
    { key: "age", title: "Age", dataIndex: "age", sortable: true },
    { key: "role", title: "Role", dataIndex: "role" },
  ];

  return (
    <div className="p-6 space-y-8">
      {/* InputField Examples */}
      <section>
        <h2 className="text-xl font-semibold mb-4">InputField Demo</h2>
        <div className="space-y-4">
          <InputField
            label="Username"
            placeholder="Enter your username"
            helperText="This will be public"
          />

          <InputField
            label="Password"
            placeholder="Enter password"
            type="password"
            invalid
            errorMessage="Password is too short"
          />

          <InputField
            label="Disabled Input"
            placeholder="Can't type here"
            disabled
          />

          <InputField
            label="Outlined Large"
            placeholder="Outlined"
            size="lg"
            variant="outlined"
          />

          <InputField
            label="Ghost Small"
            placeholder="Ghost"
            size="sm"
            variant="ghost"
          />
        </div>
      </section>

      {/* DataTable Example */}
      <section>
        <h2 className="text-xl font-semibold mb-4">DataTable Demo</h2>
        <DataTable<Person> data={data} columns={columns} selectable />
      </section>
    </div>
  );
}

export default App;