"use client";

// import Image from "next/image";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./CategorySection.css";

export default function CategorySection() {
  const categories = [
    {
      title: "Fruit & Vegetables",
      items: [
        "Meat & Poultry",
        "Fresh Vegetables",
        "Herbs & Seasonings",
        "Cuts & Sprouts",
        "Exotic Fruits & Veggies",
        "Packaged Produce",
      ],
    },
    {
      title: "Breakfast & Dairy",
      items: [
        "Milk & Flavoured Milk",
        "Butter and Margarine",
        "Eggs Substitutes",
        "Marmalades",
        "Sour Cream",
        "Cheese",
      ],
    },
    {
      title: "Meat & Seafood",
      items: [
        "Breakfast Sausage",
        "Dinner Sausage",
        "Chicken",
        "Sliced Deli Meat",
        "Wild Caught Fillets",
        "Crab and Shellfish",
      ],
    },
  ];

  return (
    <div className="position-relative" style={{
      height:'350px'
    }}>
      <div className="row g-4 align-items-center">
        {/* Left Side - Categories */}
        <div className="col-lg-9 col-12">
          <div className="row">
            {categories.map((cat, i) => (
              <div className="col-md-4" key={i}>
                <h5 className="fw-bold text-success mb-4">{cat.title}</h5>
                <ul className="list-unstyled">
                  {cat.items.map((item, idx) => (
                    <li key={idx} className="mb-2">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Promo Card */}
        <div className="col-lg-3 col-12 mt-4" style={{
              backgroundImage: "url('/categories-section/banner-menu.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "300px",
              borderRadius: 10,
            }}>
          <div className="p-4 rounded-4 category-cards bg-transparent">
            <small className="text-uppercase">HOT DEALS</small>
            <h5 className="fw-bold mt-2">Don't miss Trending</h5>
            <p className="text-success fw-bold">Save to 50%</p>
            <button className="btn btn-success rounded-pill px-4">
              Shop now
            </button>

            <div className="mt-3 position-relative" >
              <span className="position-absolute top-0 start-0 translate-middle badge rounded-circle bg-warning text-dark category-badge">
                25% off
              </span>
              {/* <img
                src="/categories-section/banner-menu.png"
                alt="Vegetables"
                width={'100%'}
                height={"200%"}
                className="img-fluid mt-4"
                // priority
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
