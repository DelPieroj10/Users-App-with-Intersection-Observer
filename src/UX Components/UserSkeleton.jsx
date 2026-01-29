import '../Styles_UX_Components/skeleton.css';

export function UserSkeleton() {
  return (
    <li className="user-card skeleton">
      <div className="avatar-skeleton"></div>
      <div className="info-skeleton">
        <div className="line short"></div>
        <div className="line short"></div>
        <div className="line long"></div>
      </div>
    </li>
  );
}
