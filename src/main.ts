import { getInput, info, error, setFailed } from '@actions/core';
import axios from 'axios';
import { parseJsonSafely } from './parseJsonSafely';

async function run(): Promise<void> {
    try {
        const url: string = getInput('url');
        const type: string = getInput('type');
        const data = parseJsonSafely(getInput('data'));
        const headers = parseJsonSafely(getInput('headers'));
        const params = parseJsonSafely(getInput('params'));

        info(`Type of request ${type}`);

        if (type === 'POST') {
            info(`Sending POST request to ${url}`);
            await axios.post(url, data, {
                headers,
                params,
            });
        } else if (type === 'PATCH') {
            info(`Sending PATCH request to ${url}`);
            await axios.patch(url, data, {
                headers,
                params,
            });
        } else if (type === 'PUT') {
            info(`Sending PUT request to ${url}`);
            await axios.put(url, data, {
                headers,
                params,
            });
        }
    } catch (err) {
        if (err instanceof Error) {
            error(err.message);
            setFailed(err.message);
            return;
        }

        setFailed('An unknown error occured');
    }
}

run();
