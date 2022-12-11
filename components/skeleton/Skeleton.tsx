import ContentLoader from "react-content-loader";

const Skeleton = () => {
  return (
    <ContentLoader
      speed={3}
      width={250}
      height={550}
      viewBox="0 0 250 550"
      backgroundColor="#1c2631"
      foregroundColor="#3d477b"
    >
      <rect x="2" y="-1" rx="24" ry="24" width="246" height="547" />
    </ContentLoader>
  );
};

export default Skeleton;
