/* eslint-disable no-console */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

/**
 * Overrides the console.error method
 */
console.error = () => {};

configure({ adapter: new Adapter() });
