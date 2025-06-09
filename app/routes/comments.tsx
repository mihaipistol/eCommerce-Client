import CommentsBox from '~/components/base/CommentsBox';
import type { Route } from './+types/form';
import CommentsList from '~/components/base/CommentsList';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Page() {
  return (
    <div>
      <CommentsBox />
      <CommentsList />
    </div>
  );
}
