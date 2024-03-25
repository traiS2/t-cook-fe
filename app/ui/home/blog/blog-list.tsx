import Blog from "./blog";
export default function BlogList() {
    const blogs = [
        {
            id: 1,
            title: "CÁCH LÀM BURNT CHEESECAKE MỀM MẠI",
            link: "cach-lam-burnt-cheesecake-mem-mai",
            category: "Bếp nhà mình",
            image: "http://www.savourydays.com/wp-content/uploads/2022/06/IMG_8062-scaled-610x300.jpg",
            date: "Tháng Sáu 18, 2022",
            description:
                "Một loại bánh có thể dễ tới mức nào? Đó là cho tất cả nguyên liệu vào máy xay sinh tố, xay mịn, đổ vào khuôn rồi cho vào lò 😁 Bạn không đọc nhầm đâu ạ, món cheesecake nướng cháy trứ danh này thực sự có thể làm đơn giản như vậy đấy, nhà […]",
            tags: ["cheese cake", "bánh"],
            user: "T-cook",
        },
        {
            id: 2,
            title: "Cách làm BÁNH CHUỐI YẾN MẠCH SỮA CHUA HEALTHY",
            link : "cach-lam-banh-chuoi-yen-mach-sua-chua-healthy",
            category: "Bếp nhà mình",
            image: "http://www.savourydays.com/wp-content/uploads/2022/06/IMG_9610-610x300.jpg",
            date: "Tháng Sáu 17, 2022",
            description:
                "Một chiếc bánh “thuần healthy”, gluten-free, dùng 100% bột yến mạch, nhưng vẫn cực mềm, ẩm, và thơm nức mùi chuối tươi đây ạ Bánh chuối thì không phải nói nhiều rồi, nhưng phiên bản lần này còn “khuyến mãi” thêm mùi thơm mộc mạc của yến mạch, vị thanh nhẹ và kết cấu siêu […]",
            tags: ["bánh", "chuối", "yến mạch"],
            user: "T-cook",
        },
        {
            id: 3,
            title: "Cách làm CHÈ BÁNH LỌT ĐẬU XANH",
            link: "cach-lam-che-banh-lot-dau-xanh",
            category: "Việt Nam",
            image: "http://www.savourydays.com/wp-content/uploads/2022/06/IMG_6317-610x300.jpg",
            date: "Thánh Sáu 16, 2022",
            description:
                "Món chè “cầu vồng” cho những ngày đầu tuần oi ả đây ạ 😁 Một món chè không quá “thanh cảnh” như chè Hà Nội, nhưng cũng không quá “ngấy” như các loại chè nhiều cốt dừa. Mình nhớ ở Đội Cấn có một hàng chè Thái “giun” siêu nổi tiếng, một thời một tuần […]",
            tags: ["chè", "bánh lọt", "đậu xanh"],
            user: "T-cook",
        },
        {
            id: 4,
            title: "Cách làm CHÂN GÀ NGÂM SẢ ỚT",
            link: "cach-lam-chan-ga-ngam-sa-ot",
            category: "Bếp nhà mình",
            image: "http://www.savourydays.com/wp-content/uploads/2022/06/8-1-2-610x300.jpg",
            date: "Tháng Sáu 15, 2022",
            description:
                "Món ăn vặt quốc dân cuối cùng cũng đổ bộ SD đây ạaaa!!!! Chân gà giòn sần sật, chua chua, ngọt ngọt, cay cay lại thơm mùi sả – tắc, dù ăn vặt hay để làm mồi nhậu cho cả nhà uống bia tối mùa hè thì đều hết xảy.  Mình chính xác là “đạo” […]",
            tags: ["gà", "sả", "ớt"],
            user: "T-cook",
        },
    ];
    return (
        <div className="w-full h-auto mt-4">
            {blogs.map((blog) => (
                <Blog key={blog.id} {...blog} />
            ))}
        </div>
    );
}
