import { Button } from 'components/atoms/Button/Button';
import { ArticleWrapper, NewsSectionHeader, TitleWrapper, Wrapper } from './NewsSection.styles';

const data = [
  {
    title: 'New computers at school',
    category: 'Tech news',
    content:
      'Ut irure sunt exercitation incididunt laboris duis cupidatat quis ullamco qui consequat nisi. Sint nostrud excepteur eu reprehenderit eu. Sit ex eiusmod mollit enim velit aliquip elit in. Eiusmod et incididunt est laborum irure consequat sunt anim duis sunt ex occaecat ipsum. Lorem culpa magna nulla tempor velit occaecat quis incididunt est fugiat elit ad deserunt velit. Pariatur elit nostrud nostrud amet deserunt anim officia id nulla laboris. Ipsum elit velit irure deserunt et fugiat.',
    image: null,
  },
  {
    title: 'New computers at school2',
    category: 'Tech news',
    content:
      'Ut irure sunt exercitation incididunt laboris duis cupidatat quis ullamco qui consequat nisi. Sint nostrud excepteur eu reprehenderit eu. Sit ex eiusmod mollit enim velit aliquip elit in. Eiusmod et incididunt est laborum irure consequat sunt anim duis sunt ex occaecat ipsum. Lorem culpa magna nulla tempor velit occaecat quis incididunt est fugiat elit ad deserunt velit. Pariatur elit nostrud nostrud amet deserunt anim officia id nulla laboris. Ipsum elit velit irure deserunt et fugiat.',
    image: null,
  },
  {
    title: 'New computers at school3',
    category: 'Tech news',
    content:
      'Ut irure sunt exercitation incididunt laboris duis cupidatat quis ullamco qui consequat nisi. Sint nostrud excepteur eu reprehenderit eu. Sit ex eiusmod mollit enim velit aliquip elit in. Eiusmod et incididunt est laborum irure consequat sunt anim duis sunt ex occaecat ipsum. Lorem culpa magna nulla tempor velit occaecat quis incididunt est fugiat elit ad deserunt velit. Pariatur elit nostrud nostrud amet deserunt anim officia id nulla laboris. Ipsum elit velit irure deserunt et fugiat.',
    image: null,
  },
];

const News = () => (
  <Wrapper>
    <NewsSectionHeader>University news feed</NewsSectionHeader>
    {data.map(({ title, content, category, image }) => (
      <ArticleWrapper key={title}>
        <TitleWrapper>
          <h3>{title}</h3>
          <p>{category}</p>
        </TitleWrapper>
        <p>{content}</p>
        <Button isBig>click me</Button>
      </ArticleWrapper>
    ))}
  </Wrapper>
);

export default News;
