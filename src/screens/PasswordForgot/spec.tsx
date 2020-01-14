import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Session } from '@typeDefs/session';
import SessionContext from '@context/session';

import PasswordForgotPage from '.';

describe('PasswordForgotPage', () => {
  const noSession = { authUser: null, isSessionChecked: true };
  const session = {
    authUser: { uid: '1' },
    isSessionChecked: true,
  };

  let getComponent: any;
  let defaultProps: any;

  beforeEach(() => {
    defaultProps = {};

    getComponent = (props: any = defaultProps, session: Session) => (
      <SessionContext.Provider value={session}>
        <PasswordForgotPage {...props} />
      </SessionContext.Provider>
    );
  });

  it('renders when not authorized', () => {
    render(getComponent(null, noSession));

    expect(
      screen.queryByText('Reset your password')
    ).toBeInTheDocument();
  });

  it('renders when authorized', () => {
    render(getComponent(null, session));

    expect(
      screen.queryByText('Reset your password')
    ).toBeInTheDocument();
  });
});
