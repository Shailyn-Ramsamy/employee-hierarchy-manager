import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
    Button,
    Flex,
    Heading, ScrollView, Table, TableBody, TableCell, TableRow,
    Text,
    TextField,
    View,
    withAuthenticator,
} from "@aws-amplify/ui-react";
import { listEmployees } from "./graphql/queries";
import {
    createEmployee as createEmployeeMutation,
    deleteEmployee as deleteEmployeeMutation,
} from "./graphql/mutations";
import { API } from "aws-amplify";
import * as PropTypes from "prop-types";

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
    const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);

    const handleOptionsClick = (employeeId) => {
        setSelectedEmployeeId(employeeId);
        setShowOptionsModal(true);
    };

    const closeOptionsModal = () => {
        setShowOptionsModal(false);
        // If needed, you can reset the selected employee ID or perform other actions
    };

    const handleEmployeeClick = (employeeId) => {
        setSelectedEmployeeId(employeeId);
        setShowEmployeeModal(true);
        setShowOptionsModal(false);
    };

    const closeEmployeeModal = () => {
        setShowEmployeeModal(false);
        // If needed, you can reset the selected employee ID or perform other actions
    };
    useEffect(() => {
        fetchEmployees();
    }, []);

    async function fetchEmployees() {
        const apiData = await API.graphql({ query: listEmployees });
        const employeesFromAPI = apiData.data.listEmployees.items;
        setEmployees(employeesFromAPI);
    }

    async function createEmployee(event) {
        event.preventDefault();
        const form = new FormData(event.target);
        const data = {
            firsName: form.get("firstName"),
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

// ...

    useEffect(() => {
        // Use the fetchEmployees function to fetch the initial list of employees
        fetchEmployees();
    }, []);

    async function deleteEmployee(id) {
        setShowOptionsModal(false);
        const newEmployees = employees.filter((employee) => employee.id !== id);
        setEmployees(newEmployees);

        await API.graphql({
            query: deleteEmployeeMutation,
            variables: { input: { id } },
        });
    }


    return (
        <View className="App">
            <Heading level={1}>Employee Management System</Heading>
            <View as="form" margin="3rem 0" onSubmit={createEmployee}>
                <Flex direction="row" justifyContent="center">
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
                    <TextField
                        name="role"
                        placeholder="Role/Position"
                        label="Role/Position"
                        labelHidden
                        variation="quiet"
                        required
                    />
                    <TextField
                        name="reportingLineManager"
                        placeholder="Reporting Line Manager"
                        label="Reporting Line Manager"
                        labelHidden
                        variation="quiet"
                    />
                    <Button type="submit" variation="primary">
                        Create Employee
                    </Button>
                </Flex>
            </View>
            <Heading level={2}>Current Employees</Heading>
            <ScrollView>
                <div className="table-container">
                    <Table>
                        <TableHeader/>
                        <TableBody>
                            {employees.map((employee) => (
                                <TableRow key={employee.id}>
                                    <TableCell className="font-medium">{employee.employeeNumber}</TableCell>
                                    <TableCell>{employee.firsName} {employee.lastName}</TableCell>
                                    <TableCell>{employee.role}</TableCell>
                                    <TableCell className="text-right">{employee.reportingLineManager}</TableCell>
                                    <TableCell>
                                        {/* Options button for each employee */}
                                        <Button onClick={() => handleOptionsClick(employee.id)}>
                                            &hellip;
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </ScrollView>

            {/* Modal for options */}
            {showOptionsModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeOptionsModal}>&times;</span>
                        <Button style={{marginTop: 70}} onClick={() => handleEmployeeClick(selectedEmployeeId)}>
                            View Employee Data
                        </Button>
                        <Button style={{marginTop: 20, marginRight: 10}} onClick={() => deleteEmployee(selectedEmployeeId)}>
                            Delete Employee
                        </Button>
                        {/* Add your options and actions here */}
                    </div>
                </div>
            )}

            {showEmployeeModal && (
                <div className="modal2">
                    <div className="modal-content2">
                        <span className="close" onClick={closeEmployeeModal}>&times;</span>
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
