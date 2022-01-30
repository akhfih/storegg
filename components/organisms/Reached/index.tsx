import ReachedItem from '../../molecules/ReachedItem';

export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <ReachedItem number="290M+" desc="Players Top Up" />
          <ReachedItem number="12.500" desc="Game Available" />
          <ReachedItem number="87.9%" desc="Happy Players" />
          <ReachedItem number="4.8" desc="Rating Wordwide" />
        </div>
      </div>
    </section>
  );
}
