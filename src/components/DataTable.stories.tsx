import type { Meta, StoryObj } from "@storybook/react-webpack5";
import DataTable, { Column } from "./DataTable";
import React, { useState } from "react"; 
type Person = {
  id: number;
  name: string;
  age: number;
  role: string;
};

const data: Person[] = [
  { id: 1, name: "Aditya", age: 22, role: "Developer" },
  { id: 2, name: "Riya", age: 24, role: "Designer" },
  { id: 3, name: "Sam", age: 21, role: "Intern" },
];

const columns: Column<Person>[] = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "age", title: "Age", dataIndex: "age", sortable: true },
  { key: "role", title: "Role", dataIndex: "role" },
];

const meta: Meta<typeof DataTable<Person>> = {
  title: "Tables/DataTable",
  component: DataTable,
  tags: ["autodocs"],
  argTypes: {
    loading: { control: "boolean" },
    selectable: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof DataTable<Person>>;

export const Playground: Story = {
  args: {
    data,
    columns,
    selectable: true,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns,
  },
};

export const Loading: Story = {
  args: {
    data: [],
    columns,
    loading: true,
  },
};

export const Selectable: Story = {
  args: {
    data,
    columns,
    selectable: true,
    onRowSelect: (rows) => alert("Selected rows: " + rows.map((r) => r.name).join(", ")),
  },
};

export const Sorted: Story = {
  render: () => (
    <div className="w-[500px]">
      <DataTable<Person> data={data} columns={columns} />
    </div>
  ),
};

export const WithSearch = {
    render: () => {
      const [query, setQuery] = useState("");
      const filteredData = data.filter(
        (row) =>
          row.name.toLowerCase().includes(query.toLowerCase()) ||
          row.role.toLowerCase().includes(query.toLowerCase())
      );
  
      return (
        <div className="w-[500px] space-y-4">
          <input
            type="text"
            placeholder="Search by name or role..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
          <DataTable<Person> data={filteredData} columns={columns} selectable />
        </div>
      );
    },
  };