import PageSection from '../PageSection';

const MOCK_WITH_TITLE = (
  <PageSection title="Example">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      <span className="highlighted">sed do eiusmod tempor incididunt ut</span> labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum
    </p>
  </PageSection>
);

const MOCK_WITHOUT_TITLE = (
  <PageSection>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      <span className="highlighted">sed do eiusmod tempor incididunt ut</span> labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum
    </p>
  </PageSection>
);

export { MOCK_WITH_TITLE, MOCK_WITHOUT_TITLE };
