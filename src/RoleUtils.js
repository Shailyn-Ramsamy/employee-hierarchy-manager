import { API } from "aws-amplify";
import { listRoles } from "./graphql/queries";
import { Storage } from 'aws-amplify';


export async function fetchRoles() {
    try {
        const apiData = await API.graphql({ query: listRoles });
        const rolesFromAPI = apiData.data.listRoles.items;
        return rolesFromAPI;
    } catch (error) {
        console.error("Error fetching roles:", error);
        return [];
    }
}


