import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import AppRouter from './AppRouter';

it('renders welcome message', () => {
    const appRouter = renderer
        .create(<AppRouter />)
        .toJSON();
    expect(appRouter).toMatchSnapshot();
});
