interface ReachedItemProps {
number : string;
desc : string;
}
export default function ReachedItem({ number, desc } : ReachedItemProps) {
  return (
    <>
      <div className="me-lg-35">
        <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
          {number}
        </p>
        <p className="text-lg text-lg-start text-center color-palette-2 m-0">{desc}</p>
      </div>
      <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none" />
    </>
  );
}
