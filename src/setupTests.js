import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

/**
 * @param {string} message The message to not print
 */
console.error = (message) => {};

configure({ adapter: new Adapter() });
