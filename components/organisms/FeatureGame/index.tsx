import FeatuerItem from '../../molecules/FeatureItem';

export default function FeatureGame() {
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br />
          {' '}
          Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          <FeatuerItem thumbnail="Thumbnail-1" title="Super Mechs" category="Mobile" />
          <FeatuerItem thumbnail="Thumbnail-2" title="Super Mechs" category="Mobile" />
          <FeatuerItem thumbnail="Thumbnail-3" title="Super Mechs" category="Mobile" />
          <FeatuerItem thumbnail="Thumbnail-4" title="Super Mechs" category="Mobile" />
          <FeatuerItem thumbnail="Thumbnail-5" title="Super Mechs" category="Mobile" />
        </div>
      </div>
    </section>
  );
}
