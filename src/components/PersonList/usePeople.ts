import { useEnv } from '@react-force/core';
import axios from 'axios';
import { useQuery } from 'react-query';
import { Person } from '../../models';
import { EnvVar } from '../../utils';

/**
 * Maps person received from server to domain
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

/**
 * Fetches people from server
 * @param url
 */
async function fetchPeople(url: string): Promise<Array<Person>> {
    const resp = await axios.get(url);
    const data = resp.data;

    // Convert to application domain and return
    const people: Array<Person> = data.map((person: any) =>
        mapPersonToDomain(person)
    );

    // Sort by name
    people.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    });

    return people;
}

/**
 * Hook to fetch people from server
 */
export const usePeople = () => {
    const env = useEnv();
    const apiUrl = env.get(EnvVar.API_URL);

    return useQuery<Array<Person>, 'people'>(
        'people',
        async () => {
            return fetchPeople(`${apiUrl}/users`);
        },
        {
            refetchOnWindowFocus: false,
            staleTime: Infinity,
        }
    );
};
