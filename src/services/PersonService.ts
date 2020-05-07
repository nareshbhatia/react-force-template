import axios from 'axios';
import { Person } from '../models';

const api = process.env.REACT_APP_API_URL;

/**
 * Map person received from server to domain
 * @param person
 */
const mapPersonToDomain = (person: any): Person => {
    const { id, name, company, email, address } = person;

    return {
        id,
        name,
        company: company.name,
        email,
        city: address.city,
    };
};

async function fetchPeople(): Promise<Array<Person>> {
    const resp = await axios.get(`${api}/users`);
    const data = resp.data;

    // Convert to application domain and return
    return data.map((person: any) => mapPersonToDomain(person));
}

export const PersonService = {
    fetchPeople,
};
