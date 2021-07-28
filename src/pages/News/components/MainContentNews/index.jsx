import { Col, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';
import './MainContent.scss';

const StyleText = styled.p`
  color: ${(props) => props.theme.textColor};
`;

function MainContent(props) {
  return (
    <section className="main-news__container">
      <div className="mobileHidden">
        <div className="main-news__widget">
          <div className="main-news__widget-ticket">
            <p className="main-news__widget-tag"># Dịch covid bùng phát</p>
            <p className="main-news__widget-tag"># Covid - truy vết</p>
          </div>
          <div className="main-news__widget-weather">
            <StyleText>TP. Hồ Chí Minh</StyleText>
          </div>
        </div>
      </div>
      <div className="main-news__intro">
        <Row gutter={[16, 16]}>
          <Col xs={24} md={24} lg={6}>
            <Row className="main-news__intro-item">
              <Col xs={8} md={8} lg={12}>
                <img
                  src="https://znews-photo.zadn.vn/w210/Uploaded/ovhpaob/2021_07_15/gian_cach_sg_cover.jpeg"
                  alt="thumbnail-news"
                  className="main-news__intro-thumbnail"
                />
              </Col>

              <Col xs={16} md={16} lg={12}>
                <StyleText className="main-news__intro-title">
                  Phó thủ tướng: Tất cả địa phương kêu gọi người dân hạn chế ra
                  khỏi nhà
                </StyleText>
              </Col>
            </Row>
            <Row className="main-news__intro-item">
              <Col xs={8} md={8} lg={12}>
                <img
                  src="https://znews-photo.zadn.vn/w210/Uploaded/znanug/2021_07_13/DSC_0668_1.jpg"
                  alt="thumbnail-news"
                  className="main-news__intro-thumbnail"
                />
              </Col>
              <Col xs={16} md={16} lg={12}>
                <StyleText className="main-news__intro-title">
                  Thêm 3.321 ca mắc Covid-19 trong ngày 16/7, TP.HCM có 2.420
                  bệnh nhân
                </StyleText>
              </Col>
            </Row>
            <Row className="main-news__intro-item">
              <Col xs={8} md={8} lg={12}>
                <img
                  src="https://znews-photo.zadn.vn/w210/Uploaded/aobohun/2021_07_16/DSC_0186.jpg"
                  alt="thumbnail-news"
                  className="main-news__intro-thumbnail"
                />
              </Col>
              <Col xs={16} md={16} lg={12}>
                <StyleText className="main-news__intro-title">
                  Vì sao số ca tử vong vì Covid-19 tại TP.HCM tăng?
                </StyleText>
              </Col>
            </Row>
            <Row className="main-news__intro-item">
              <Col xs={8} md={8} lg={12}>
                <img
                  src="https://adtima-media.zascdn.me/2021/07/31ad0fcd-cd4c-4570-8818-f90b3af226d5.jpg"
                  alt="thumbnail-news"
                  className="main-news__intro-thumbnail"
                />
              </Col>
              <Col xs={16} md={16} lg={12}>
                <StyleText className="main-news__intro-title">
                  Nhạc sĩ Nguyễn Văn Chung mua ghế massage Elipsport ủng hộ quỹ
                  vaccine
                </StyleText>
              </Col>
            </Row>
            <Row className="main-news__intro-item">
              <Col xs={8} md={8} lg={12}>
                <img
                  src="https://znews-photo.zadn.vn/w210/Uploaded/zxgorz/2021_07_16/bia_bia.jpg"
                  alt="thumbnail-news"
                  className="main-news__intro-thumbnail"
                />
              </Col>
              <Col xs={16} md={16} lg={12}>
                <StyleText className="main-news__intro-title">
                  Tử tù nhiễm Covid-19 xin đi ngay khi thấy mình trên tivi
                </StyleText>
              </Col>
            </Row>
          </Col>
          <Col lg={18} className="mobileHidden">
            <Row gutter={[16, 16]}>
              <Col lg={16}>
                <Row className="main-news__intro-item">
                  <Col lg={24}>
                    <img
                      src="https://znews-photo.zadn.vn/w960/Uploaded/ovhpaob/2021_07_15/gian_cach_sg_cover.jpeg"
                      alt="thumbnail-news"
                      className="main-news__intro-thumbnail center"
                    />
                  </Col>
                  <Col lg={24}>
                    <StyleText className="main-news__intro-title center">
                      Phó thủ tướng: Tất cả địa phương kêu gọi người dân hạn chế
                      ra khỏi nhà
                    </StyleText>
                    <StyleText className="main-news__intro-content">
                      Ban Chỉ đạo phòng, chống dịch Covid-19 quốc gia sẽ báo cáo
                      Thủ tướng, Chính phủ để có chỉ đạo với tinh thần nâng cao
                      cảnh giác, chuẩn bị cho tình huống xấu hơn.
                    </StyleText>
                  </Col>
                </Row>
              </Col>
              <Col lg={8}>
                <Row className="main-news__intro-item">
                  <Col xs={8} md={8} lg={12}>
                    <img
                      src="https://znews-photo.zadn.vn/w480/Uploaded/bfjysesfzyr/2021_06_24/bac_ning_6.jpg"
                      alt="thumbnail-news"
                      className="main-news__intro-thumbnail"
                    />
                  </Col>
                  <Col xs={16} md={16} lg={12}>
                    <StyleText className="main-news__intro-title">
                      Doanh nghiệp TP.HCM kiến nghị chỉ xét nghiệm 1 lần cho
                      công nhân
                    </StyleText>
                  </Col>
                </Row>
                <Row className="main-news__intro-item">
                  <Col xs={8} md={8} lg={12}>
                    <img
                      src="https://znews-photo.zadn.vn/w480/Uploaded/piqbzcvo/2021_07_14/Takao_Saitou.jpg"
                      alt="thumbnail-news"
                      className="main-news__intro-thumbnail"
                    />
                  </Col>
                  <Col xs={16} md={16} lg={12}>
                    <StyleText className="main-news__intro-title">
                      Bộ manga lập kỷ lục mới cho truyện tranh Nhật Bản
                    </StyleText>
                  </Col>
                </Row>
                <Row className="main-news__intro-item">
                  <Col xs={8} md={8} lg={12}>
                    <img
                      src="https://znews-photo.zadn.vn/w480/Uploaded/jopobun/2021_07_16/bvdachien.jpg"
                      alt="thumbnail-news"
                      className="main-news__intro-thumbnail"
                    />
                  </Col>
                  <Col xs={16} md={16} lg={12}>
                    <StyleText className="main-news__intro-title">
                      TP.HCM gấp rút xây mới 2 bệnh viện dã chiến với 5.800
                      giường
                    </StyleText>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default MainContent;
