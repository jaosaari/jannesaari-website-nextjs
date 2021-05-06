import PropTypes from 'prop-types';
import styled from 'styled-components';

import Footer from './Footer';
import Header from './Header';
import GlobalStyles from './styles/GlobalStyles';
import Reset from './styles/Reset';

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

export default function Page({ children }) {
  return (
    <div>
      <Reset />
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>

      <Footer />
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
