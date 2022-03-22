import Image from 'next/image';

interface FeatureItemProps {
    thumbnail : string;
    title : string;
    category : string;
    id : string;
}

export default function FeatuerItem({
  thumbnail, title, category, id,
} : FeatureItemProps) {
  return (
    <div className="featured-game-card position-relative">
      <a href={`./detail/${id}`}>
        <div className="blur-sharp">
          <img className="thumbnail" src={`${thumbnail}`} width={205} height={270} alt={thumbnail} />
        </div>
        <div className="cover position-absolute bottom-0 m-32">
          <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
            <div className="game-icon mx-auto">
              <Image src="/icon/ic-gamepad.svg" width={54} height={36} alt="gamepad" layout="fixed" />
            </div>
            <div>
              <p className="fw-semibold text-white text-xl m-0">{title}</p>
              <p className="fw-light text-white m-0">{category}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
