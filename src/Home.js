import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
    Button,
    Flex,
    Heading, ScrollView, SelectField, Table, TableBody, TableCell, TableRow,
    Text,
    TextField,
    View,
    withAuthenticator,
} from "@aws-amplify/ui-react";
import {getEmployee, listEmployees, listRoles} from "./graphql/queries";
import {
    createEmployee as createEmployeeMutation,
    deleteEmployee as deleteEmployeeMutation, updateEmployee,
} from "./graphql/mutations";
import {API, graphqlOperation} from "aws-amplify";

function TableHeader() {
    return (
        <thead className="sticky-header">
        <TableRow>
            <TableCell className="font-bold">Employee Number</TableCell>
            <TableCell className="font-bold">Name</TableCell>
            <TableCell className="font-bold">Role</TableCell>
            <TableCell className="font-bold text-right">Reporting Line Manager</TableCell>
            <TableCell className="font-bold"> </TableCell>
        </TableRow>
        </thead>
    );
}

const App = ({ signOut }) => {
    const [employees, setEmployees] = useState([]);
    const [showOptionsModal, setShowOptionsModal] = useState(false);
    const [showEmployeeModal, setShowEmployeeModal] = useState(false);
    const [showEmployeeCreateModal, setShowEmployeeCreateModal] = useState(false);
    const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
    const [selectedEmployeeData, setSelectedEmployeeData] = useState(null);
    const [roles, setRoles] = useState([]);
    const [existingEmployees, setExistingEmployees] = useState([]);


    const handleOptionsClick = (employeeId) => {
        setSelectedEmployeeId(employeeId);
        setShowOptionsModal(true);
    };

    const closeOptionsModal = () => {
        setShowOptionsModal(false);
        // If needed, you can reset the selected employee ID or perform other actions
    };

    const handleEmployeeCreateClick = (employeeId) => {
        setShowEmployeeCreateModal(true);
    };

    const closeEmployeeCreateModal = () => {
        setShowEmployeeCreateModal(false);
        // If needed, you can reset the selected employee ID or perform other actions
    };

    const handleEmployeeClick = async (employeeId) => {
        setSelectedEmployeeId(employeeId);
        setShowEmployeeModal(true);
        setShowOptionsModal(false);

        try {
            const apiData = await API.graphql({
                query: getEmployee, // Assume you have a query named getEmployee to fetch individual employee details
                variables: { id: employeeId },
            });

            const employeeData = apiData.data.getEmployee; // Adjust this based on your actual GraphQL schema
            setSelectedEmployeeData(employeeData);
        } catch (error) {
            console.error("Error fetching employee details:", error);
        }
    };

    const closeEmployeeModal = () => {
        setShowEmployeeModal(false);
    };

    useEffect(() => {
        fetchEmployees();
        fetchRoles();
        fetchExistingEmployees(); // Add this line to fetch existing employees
    }, []);

    async function fetchExistingEmployees() {
        try {
            const apiData = await API.graphql({ query: listEmployees });
            const existingEmployeesFromAPI = apiData.data.listEmployees.items;
            setExistingEmployees(existingEmployeesFromAPI);
        } catch (error) {
            console.error("Error fetching existing employees:", error);
        }
    }

    async function fetchRoles() {
        try {
            const apiData = await API.graphql({ query: listRoles });
            const rolesFromAPI = apiData.data.listRoles.items;
            setRoles(rolesFromAPI);
        } catch (error) {
            console.error("Error fetching roles:", error);
        }
    }

    async function fetchEmployees() {
        try {
            const apiData = await API.graphql({ query: listEmployees });
            console.log("API Data:", apiData);

            if (apiData.errors) {
                // Log the errors if there are any
                console.error("GraphQL Errors:", apiData.errors);
            }

            const employeesFromAPI = apiData.data.listEmployees.items;
            setEmployees(employeesFromAPI);
        } catch (error) {
            console.error("Error fetching employees:", error);
        }
    }

    async function createEmployee(event) {
        setShowEmployeeCreateModal(false);
        event.preventDefault();
        const form = new FormData(event.target);
        const data = {
            firstName: form.get("firstName"),
            lastName: form.get("lastName"),
            birthDate: form.get("birthDate"),
            employeeNumber: form.get("employeeNumber"),
            salary: form.get("salary"),
            role: form.get("role"),
            reportingLineManager: form.get("reportingLineManager"),
            avatar: form.get("avatar"),
        };

        await API.graphql({
            query: createEmployeeMutation,
            variables: { input: data },
        });

        // Fetch the updated list of employees after creating a new employee
        fetchEmployees();
        event.target.reset();
    }

    const getRoleNameById = (roleId) => {
        const role = roles.find((r) => r.id === roleId);
        return role ? role.name : 'N/A'; // Return 'N/A' if the role is not found
    };


// ...


    async function deleteEmployee(id) {
        setShowOptionsModal(false);
        const newEmployees = employees.filter((employee) => employee.id !== id);
        setEmployees(newEmployees);

        await API.graphql({
            query: deleteEmployeeMutation,
            variables: { input: { id } },
        });
    }

    const UpdateField = ({ label, value, onUpdate }) => {
        const [editing, setEditing] = useState(false);
        const [newValue, setNewValue] = useState(value);

        const handleUpdate = () => {
            onUpdate(newValue);
            setEditing(false);
        };

        return (
            <div style={{ marginBottom: 10 }}>
                <p>{label}: {editing ? <input type="text" value={newValue} onChange={(e) => setNewValue(e.target.value)} /> : value}</p>
                {editing ? (
                    <>
                        <button onClick={handleUpdate}>Save</button>
                        <button onClick={() => { setEditing(false); setNewValue(value); }}>Cancel</button>
                    </>
                ) : (
                    <button onClick={() => setEditing(true)}>Edit</button>
                )}
            </div>
        );
    };

    const handleUpdate = async (field, value) => {
        try {
            console.log(`Updating ${field} to ${value} for employee ${selectedEmployeeId}`);

            const input = {
                id: selectedEmployeeId,
                [field]: value,
            };

            await API.graphql({
                query: updateEmployee,
                variables: { input },
            });

            const updatedEmployeeData = await API.graphql({
                query: getEmployee,
                variables: { id: selectedEmployeeId },
            });

            const updatedEmployee = updatedEmployeeData.data.getEmployee;

            setSelectedEmployeeData(updatedEmployee);

            console.log('Update successful');

            // Refetch the updated employee data
            fetchEmployees();
        } catch (error) {
            console.error(`Error updating ${field}:`, error);
        }
    };



    return (
        <View className="App">
            <Heading level={1}>Employee Management System</Heading>
            <Heading level={2}>Current Employees</Heading>
            <div className="button-container">
                <Button variation="primary" onClick={handleEmployeeCreateClick}>Add Employee</Button>
            </div>
            <ScrollView>
                <div className="table-container">
                    <Table>
                        <TableHeader/>
                        <TableBody>
                            {employees.map((employee) => (
                                <TableRow key={employee.id}>
                                    <TableCell className="font-medium">{employee.employeeNumber}</TableCell>
                                    <TableCell>{employee.firstName && employee.lastName ? `${employee.firstName} ${employee.lastName}` : 'N/A'}</TableCell>
                                    <TableCell>{getRoleNameById(employee.role)}</TableCell>
                                    <TableCell className="text-right">
                                        {employee.reportingLineManager &&
                                            existingEmployees.find(emp => emp.id === employee.reportingLineManager)?.firstName +
                                            ' ' +
                                            existingEmployees.find(emp => emp.id === employee.reportingLineManager)?.lastName}
                                    </TableCell>
                                    <TableCell>
                                        <button onClick={() => handleOptionsClick(employee.id)}>
                                            &hellip;
                                        </button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </ScrollView>

            {showOptionsModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeOptionsModal}>&times;</span>
                        <div>
                            <p style={{fontWeight: "bold", fontSize: 20}}>Options</p>
                        </div>
                        <Button style={{marginTop: 20}} onClick={() => handleEmployeeClick(selectedEmployeeId)}>
                            View/Update Employee Data
                        </Button>
                        <Button style={{marginTop: 20, marginRight: 10}} onClick={() => deleteEmployee(selectedEmployeeId)}>
                            Delete Employee
                        </Button>
                    </div>
                </div>
            )}

            {showEmployeeCreateModal && (
                <div className="modal">
                    <div className="modal-create">
                        <span className="close" onClick={closeEmployeeCreateModal}>&times;</span>
                        <div>
                            <p style={{fontWeight: "bold", fontSize: 30, marginTop:30}}>Create Employee</p>
                        </div>
                        <div>
                            <View as="form" margin="3rem 0" onSubmit={createEmployee}>
                                <Flex direction="column" justifyContent="center">
                                    <TextField
                                        name="firstName"
                                        placeholder="First Name"
                                        label="First Name"
                                        labelHidden
                                        variation="quiet"
                                        required
                                    />
                                    <TextField
                                        name="lastName"
                                        placeholder="Last Name"
                                        label="Last Name"
                                        labelHidden
                                        variation="quiet"
                                        required
                                    />
                                    <TextField
                                        name="birthDate"
                                        placeholder="Birth Date"
                                        label="Birth Date"
                                        labelHidden
                                        variation="quiet"
                                        required
                                    />
                                    <TextField
                                        name="employeeNumber"
                                        placeholder="Employee Number"
                                        label="Employee Number"
                                        labelHidden
                                        variation="quiet"
                                        required
                                    />
                                    <TextField
                                        name="salary"
                                        placeholder="Salary"
                                        label="Salary"
                                        labelHidden
                                        variation="quiet"
                                        type="number"
                                        required
                                    />
                                    <SelectField
                                        name="role"
                                        label="Role/Position"
                                        labelHidden
                                        variation="quiet"
                                        required
                                    >
                                        {roles.map((role) => (
                                            <option key={role.id} value={role.id}>
                                                {role.name}
                                            </option>
                                        ))}
                                    </SelectField>
                                    <SelectField
                                        name="reportingLineManager"
                                        label="Reporting Line Manager"
                                        labelHidden
                                        variation="quiet"
                                    >
                                        <option value="">Select Reporting Line Manager</option>
                                        {existingEmployees.map((employee) => (
                                            <option key={employee.id} value={employee.id}>
                                                {`${employee.firstName} ${employee.lastName}`}
                                            </option>
                                        ))}
                                    </SelectField>
                                    <Button type="submit" variation="primary">
                                        Create Employee
                                    </Button>
                                </Flex>
                            </View>
                        </div>

                    </div>
                </div>
            )}

            {showEmployeeModal && (
                <div className="modal2">
                    <div className="modal-content2" style={{ textAlign: 'left' }}>
                        <span className="close" onClick={closeEmployeeModal}>&times;</span>
                        <div style={{marginTop:20}}>
                            <p style={{fontWeight: "bold", fontSize: 30}}>Update Employee Information</p>
                        </div>
                        {selectedEmployeeData && (
                            <div style={{ marginTop: 20 }}>
                                <UpdateField
                                    label="First Name"
                                    value={`${selectedEmployeeData.firstName}`}
                                    onUpdate={(value) => handleUpdate('firstName', value)}
                                />
                                <UpdateField
                                    label="First Name"
                                    value={`${selectedEmployeeData.lastName}`}
                                    onUpdate={(value) => handleUpdate('lastName', value)}
                                />
                                <UpdateField
                                    label="Employee Number"
                                    value={selectedEmployeeData.employeeNumber}
                                    onUpdate={(value) => handleUpdate('employeeNumber', value)}
                                />
                                <UpdateField
                                    label="Birth Date"
                                    value={selectedEmployeeData.birthDate}
                                    onUpdate={(value) => handleUpdate('birthDate', value)}
                                />
                                <UpdateField
                                    label="Salary"
                                    value={selectedEmployeeData.salary}
                                    onUpdate={(value) => handleUpdate('salary', value)}
                                />
                                <UpdateField
                                    label="Role"
                                    value={getRoleNameById(selectedEmployeeData.role)}
                                    onUpdate={(value) => handleUpdate('role', value)}
                                />
                                <UpdateField
                                    label="Reporting Line Manager"
                                    value={selectedEmployeeData.reportingLineManager}
                                    onUpdate={(value) => handleUpdate('reportingLineManager', value)}
                                />
                                {/* Add more fields as needed */}
                            </div>
                        )}
                    </div>
                </div>
            )}

            <div className="margin-top-50">
                <Button onClick={signOut}>Sign Out</Button>
            </div>
        </View>
    );
};

export default withAuthenticator(App);


