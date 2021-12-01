import Navigation from 'components/organisms/Navigation/Navigation';
import { Wrapper } from 'components/templates/MainTemplate/MainTemplate.styles';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
import News from 'components/templates/NewsSection/NewsSection';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      {children}
      <News />
    </Wrapper>
  );
};

export default MainTemplate;
