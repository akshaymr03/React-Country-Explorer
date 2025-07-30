import { useEffect, useState } from 'react';
import TabsFilter from '../../components/tabs-filter';
import CarouselComponent from '../../components/carousel';
import CountryList from '../../components/country-list';
import WelcomeTitle from '../../components/welcome-title';
import { Col, Row, Spin } from 'antd';
import { fetchCountries, loadMore } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';
import Footer from '../../components/footer';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('All');

  const dispatch = useDispatch();
  const { countries, visibleCount, loading } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(loadMore());
  };

  const canLoadMore = visibleCount < countries.length;

  const visibleCountries = countries.slice(0, visibleCount);

  const filteredCountries =
    activeTab === 'All'
      ? visibleCountries
      : visibleCountries.filter((c) => c.region === activeTab);

  return (
    <>
      <div className="page-container">
        <TabsFilter activeTab={activeTab} onChange={setActiveTab} />
        <WelcomeTitle />
        <Row gutter={[16, 16]} style={{ margin: '.5%' }}>
          <Col
            xs={24}
            sm={24}
            md={16}
            lg={16}
            xl={16}
            className="carousel-col"
          >
            <CarouselComponent />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={8}
            lg={8}
            xl={8}
            className="frame-col"
          >
            <div className="frame">
              <img
                src="/world-flag.jpg"
                alt="illustration"
                style={{ width: '100%', height: '100%' }} 
              />
            </div>
          </Col>
        </Row>
        <CountryList countries={filteredCountries} />
        {canLoadMore && (
          <Row justify="center" style={{ marginTop: '20px' }}>
            <Col>
              <button onClick={handleLoadMore} className="load-more-button" style={{ padding: '8px 16px', cursor: 'pointer' }}>
                Load More
              </button>
            </Col>
          </Row>
        )}
        <Footer />
        <Spin spinning={loading} fullscreen indicator={<LoadingOutlined style={{ fontSize: 48, color: '#3E3E3E' }} spin />} />
      </div >
      {/* </div> */}
    </>
  );
};

export default HomePage;
