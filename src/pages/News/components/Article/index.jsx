import { Col, Row } from 'antd';
import WrapperArticleItem from 'HOCs/WrapperArticleItem';
import React from 'react';
import './Article.scss';
const ArticleItem = (props) => {
  const { imageUrl, title, content, friendlyTime } = props;
  console.log(imageUrl, title, content);
  return (
    <Row gutter={{ xs: 8, md: 16, lg: 24 }} className="article-news__item">
      <Col xs={8}>
        <div className="article-news__thumbnail">
          <img src={imageUrl} alt="" />
        </div>
      </Col>
      <Col xs={16}>
        <h3 className="article-news__title">{title}</h3>
        <div className="mobileHidden">
          <small>{friendlyTime}</small>
          <p className="article-news__summary">{content}</p>
        </div>
      </Col>
    </Row>
  );
};

function Article(props) {
  const NewsArticleItem = WrapperArticleItem(ArticleItem);
  return (
    <div className="article-news__container">
      <NewsArticleItem
        imageUrl="https://znews-photo.zadn.vn/w210/Uploaded/gtnzna/2021_07_17/qd_thumb1.jpg"
        title="TP Thủ Đức phong tỏa thêm 2 phường hơn 85.000 dân"
        friendlyTime="4 giờ trước đó"
        content="Từ hình ảnh bát phở đến điện thoại, xe sang, nhiều bức hình check-in sang chảnh của các cô gái tham gia sàn giao dịch nhị phân Pocinex bị nhiều người phát hiện là ảnh trên mạng."
      />
      <NewsArticleItem
        imageUrl="https://znews-photo.zadn.vn/w210/Uploaded/ngotgs/2021_07_17/BV_da_chien_Binh_Duong_chuan_bi_hoat_dong_sau_5_ngay_thi_cong.JPG"
        title="Trung tâm triển lãm lớn nhất Việt Nam thành BV dã chiến Bình Dương"
        friendlyTime="4 giờ trước đó"
        content="Trung tâm hội nghị triển lãm WTC EXPO (Bình Dương) được trưng dụng làm Bệnh viện dã chiến với quy mô 1.500 giường bệnh."
      />
      <NewsArticleItem
        imageUrl="https://znews-photo.zadn.vn/w210/Uploaded/unvjuas/2021_07_17/momo_upload_api_200429155258_637237723780101457.jpg"
        title="Lai day ma xem nguoi ta hen ho hinh anh"
        friendlyTime="4 giờ trước đó"
        content="Show hẹn hò là chưa bao giờ thiếu trên sóng truyền hình. Khán giả thích thú với việc theo dõi quá trình gặp gỡ, nảy sinh tình cảm và thậm chí cả phản bội của dàn cast."
      />
      <NewsArticleItem
        imageUrl="https://znews-photo.zadn.vn/w210/Uploaded/bzwvopcg/2021_05_04/Collage_Fotor333.jpg"
        title="Nam diễn viên phải ăn 20 miếng gà, uống 6 lon bia mỗi ngày"
        friendlyTime="4 giờ trước đó"
        content="Nam diễn viên phải nạp lượng calo khổng lồ mỗi ngày để hóa thân cho vai diễn mới trong bộ phim "
      />
      <NewsArticleItem
        imageUrl="https://znews-photo.zadn.vn/w210/Uploaded/mfnuy/2021_07_17/s_1.jpg"
        title="Tân binh đắt giá của PSG nhiễm Covid-19"
        friendlyTime="4 giờ trước đó"
        content="Mỗi hiệp đấu kéo dài 30 phút, quyền thay người không giới hạn trong những luật mới được FIFA xem xét thay đổi."
      />
      <NewsArticleItem
        imageUrl="https://znews-photo.zadn.vn/w480/Uploaded/wyhktpu/2021_06_07/windfree.jpg"
        title="Trốn nóng tại gia cần chuẩn bị những gì?"
        friendlyTime="4 giờ trước đó"
        content="Mauro Icardi và Xavi Simons lần lượt ghi bàn nhưng không thể giúp PSG giành chiến thắng trước Chambly, đội bóng hạng Hai nước Pháp trong trận giao hữu chiều 16/7 (giờ Hà Nội)."
      />
      <NewsArticleItem
        imageUrl="https://znews-photo.zadn.vn/w360/Uploaded/ofh_btgazstm/2021_07_16/1_4.jpg"
        title="Cách mực nang săn cua"
        friendlyTime="4 giờ trước đó"
        content="Mauro Icardi và Xavi Simons lần lượt ghi bàn nhưng không thể giúp PSG giành chiến thắng trước Chambly, đội bóng hạng Hai nước Pháp trong trận giao hữu chiều 16/7 (giờ Hà Nội)."
      />
      <NewsArticleItem
        imageUrl="https://znews-photo.zadn.vn/w360/Uploaded/ofh_hmzpgazs/2021_07_17/hinh_minh_hoa.jpg"
        title="Sát hại người tình tại phòng trọ rồi ra đầu thú"
        friendlyTime="4 giờ trước đó"
        content="Mauro Icardi và Xavi Simons lần lượt ghi bàn nhưng không thể giúp PSG giành chiến thắng trước Chambly, đội bóng hạng Hai nước Pháp trong trận giao hữu chiều 16/7 (giờ Hà Nội)."
      />
      <NewsArticleItem
        imageUrl="https://znews-photo.zadn.vn/w360/Uploaded/ovhpaob/2021_04_06/bo_phieu.jpeg"
        title="Bầu Chủ tịch nước, Thủ tướng vào 26/7"
        friendlyTime="4 giờ trước đó"
        content="23 năm qua, Purkharam bị rối loạn giấc ngủ nghiêm trọng. Mỗi tháng, anh chỉ có thể tỉnh táo để trông coi tiệm tạp hóa gia đình trong khoảng 5 ngày trước khi rơi vào giấc ngủ sâu."
      />
      <NewsArticleItem
        imageUrl="https://znews-photo.zadn.vn/w360/Uploaded/ovhunut/2021_07_17/17.jpg "
        title="TP.HCM yeu cau tang cuong hang hoa thiet yeu qua kenh online hinh anh"
        friendlyTime="4 giờ trước đó"
        content="Nhờ hàng triệu tế bào sắc tố trên da, mực nang có thể thay đổi màu sắc, qua đó đánh lừa thị giác của con mồi."
      />
      <NewsArticleItem
        imageUrl="https://znews-photo.zadn.vn/w360/Uploaded/pnbcuhbatgunb/2021_07_17/avabeck.jpg"
        title="Ở tuổi 46, vì sao David Beckham vẫn phong độ khi đứng bên 3 con trai?"
        friendlyTime="4 giờ trước đó"
        content="23 năm qua, Purkharam bị rối loạn giấc ngủ nghiêm trọng. Mỗi tháng, anh chỉ có thể tỉnh táo để trông coi tiệm tạp hóa gia đình trong khoảng 5 ngày trước khi rơi vào giấc ngủ sâu."
      />
      <NewsArticleItem
        imageUrl="https://znews-photo.zadn.vn/w360/Uploaded/kbd_pilk/2021_07_17/van_tu_luong6a.jpg"
        title="Cuoc song cua ac nhan noi tieng nhat man anh Hong Kong hinh anh"
        friendlyTime="4 giờ trước đó"
        content="Bệnh viện dã chiến điều trị Covid-19 số 9 sẽ chính thức tiếp nhận F0 mới mắc và không triệu chứng."
      />
    </div>
  );
}

export default Article;
