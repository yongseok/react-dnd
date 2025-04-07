export const Overlay = ({backgroundColor}: {backgroundColor: string}) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        backgroundColor,
        width: '100%',
        height: '100%',
        opacity: 0.5,
      }}
    ></div>
  );
};
