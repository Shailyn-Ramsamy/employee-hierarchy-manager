import * as React from "react";
import "./styles.css"
import {Button, View} from "@aws-amplify/ui-react";
import {useLocation} from "react-router-dom";
import CircularImage from "./Img"; // Import the CircularImage component
import {useNavigate} from "react-router-dom";







const TreeHierarchyPage = ({roles}) => {
    const navigate = useNavigate();

    function handleHomeNav() {
        navigate('/');

    }
    // Access data from the state object
    const { state } = useLocation();

    const getRoleNameById = (roleId) => {
        const role = roles.find((r) => r.id === roleId);
        return role ? role.name : 'N/A'; // Return 'N/A' if the role is not found
    };

    const extractDataArray = (input) => {
        if (Array.isArray(input)) {
            return input;
        } else if (input && input.yourData && Array.isArray(input.yourData)) {
            return input.yourData;
        } else {
            return [];
        }
    };

    // Use the helper function to get the data array
    const dataArray = extractDataArray(state || data);

    const data = JSON.parse(JSON.stringify(dataArray));
    console.log(data)

    const CardBlock = (props) => {
        const handlePress = () => {
            console.log(`Pressed: ${props.label}`);
        };

        return (
            <View onClick={handlePress} style={styles.clickableCard}>
                <CircularImage imageUrl={props.image} altText={props.label} />
                <div>
                    <div style={{ marginTop: 10 }}>{props.label}</div>
                    <div>
                        <p style={{ fontSize: 12, color: "gray" }}>
                            {getRoleNameById(props.role)}
                        </p>
                    </div>
                </div>
            </View>
        );
    };
    const Card = (props) => {
        return (
            <ul>
                {props.data.map((item) => (
                    <li key={item.id} className="card">
                        <CardBlock
                            label={`${item.firstName} ${item.lastName}`}
                            role={item.role}
                            image={item.avatar}
                        />
                        {item.children && item.children.length > 0 && <Card data={item.children} />}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div className="App">

            <View>
                <div className="org-tree">
                    <div className="header">
                        Employee Chart
                        <div className="button-container">
                            <Button variation="primary" onClick={handleHomeNav}>Home</Button>
                        </div>
                    </div>
                    <div className="org-tree-container">
                        <Card data={data} />
                    </div>
                </div>
            </View>
        </div>
    );
};

export default TreeHierarchyPage;


const styles = {
    clickableCard: {
        background: "#fff",
        height: 200,
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
