import * as React from "react";
import data from "./data.json";
import "./styles.css"
import {View} from "@aws-amplify/ui-react";

const CardBlock = (props) => {
    const handlePress = () => {
        // Add your logic for handling the press event
        console.log(`Pressed: ${props.label}`);
    };

    return (
        <View onClick={handlePress} style={styles.clickableCard}>
            {props.label}
        </View>
    );
};
const Card = (props) => {
    return (
        <ul>
            {props.data.map((item) => (
                <li key={item.id} className="card">
                    <CardBlock label={item.name} />
                    {item.children?.length && <Card data={item.children} />}
                </li>
            ))}
        </ul>
    );
};
const EmployeeChart = (props) => {
    return (
        <View>
            <div className="org-tree">
                <div className="header">Employee Chart</div>
                <div className="org-tree-container">
                    <Card data={data} />
                </div>
            </div>
        </View>
    );
};

const styles = {
    clickableCard: {
        background: "#fff",
        height: 56,
        textAlign: "center",
        width: 300,
        paddingTop: 40,
        borderRadius: 16,
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        cursor: "pointer", // Add cursor style for indicating clickability

        // Add hover effect
        transition: "background-color 0.3s ease",
        ":hover": {
            backgroundColor: "#7393B3", // Set the desired hover background color
        },
    },
};


export default EmployeeChart;
