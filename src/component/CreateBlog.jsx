import { useEffect, useRef } from "react";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
const CreateBlog = () => {
  const blogCategories = [
    "Lifestyle",
    "Technology",
    "Business & Finance",
    "Food & Drink",
    "Fashion & Beauty",
    "Education",
    "Entertainment",
    "Home & Garden",
    "Sports",
    "Arts & Culture",
    "Science & Nature",
    "Politics & Society",
    "Self-Improvement",
    "Pets & Animals",
    "Technology Reviews",
    "Travel",
    "Marketing & SEO",
    "Health & Fitness",
    "Gaming",
    "Photography & Videography",
  ];
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [categories, setCategories] = useState("");
  const [mimage, setmImage] = useState("");
  const [mtitle, setmTitle] = useState("");
  const [mdesc, setmDesc] = useState("");
  const [blog, setBlog] = useState([]);
  const [context, setContext] = useState([]);
  let image1 = useRef();
  let image2 = useRef();
  const handleadd = (e) => {
    e.preventDefault();
    setContext((prev) => [...prev, { title: title, desc: desc, image: image }]);
    setTitle("");
    setDesc("");
    setImage("");
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    setContext((prev) => [...prev, { title: title, desc: desc, image: image }]);
    setBlog((prev) => [
      ...prev,
      {
        title: mtitle,
        desc: mdesc,
        category: categories,
        banner: mimage,
        context: context,
      },
    ]);
    setTitle("");
    setDesc("");
    setCategories("");
    setImage("");
    setmTitle("");
    setmDesc("");
    setmImage("");
  };
  const handleimage1 = () => {
    image1.current.click();
  };
  const handleimage2 = () => {
    image2.current.click();
  };
  const handleCategory = (val) => {
    setCategories(val);
  };
  useEffect(() => {
    console.log(blog);
    console.log(context);
  }, [context, blog]);
  return (
    <div
      className="bg-cover"
      style={{
        backgroundImage: "url(/public/img/bg/hero2-bg.jpg)",
        backgroundRepeat: "no-repeat",
        color: "white",
      }}
    >
      <div className="mb-5  p-5"></div>
      <div className="m-4 p-2">
        <div className="shadow p-4 rounded">
          <h1>Create New Blog</h1>
          <div className="mb-3">
            <label className="form-label mt-2 fw-bold">Blog Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="name@example.com"
              value={mtitle}
              onChange={(e) => setmTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Blog Description</label>
            <textarea
              className="form-control"
              rows="3"
              value={mdesc}
              onChange={(e) => setmDesc(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="mb-3 d-flex gap-4">
            <h5>Category: </h5>

            <Dropdown drop="end">
              <Dropdown.Toggle>
                <span className="me-2 "> {categories || "Categories"}</span>
              </Dropdown.Toggle>

              <Dropdown.Menu
                align="end"
                style={{ maxHeight: "240px", overflowY: "auto" }}
              >
                {blogCategories.map((val, index) => (
                  <Dropdown.Item
                    key={index}
                    onClick={() => handleCategory(val)}
                  >
                    {val}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="mb-3 d-flex align-items-center gap-3">
            <div>
              <label className="form-label fw-bold">Insert Banner</label>
            </div>
            <div onClick={handleimage1}>
              <input
                type="file"
                ref={image1}
                style={{ display: "none" }}
                onChange={(e) => setmImage(e.target.files[0])}
              />
              <button className="btn btn-info text-light btn-outline-primary border-0">
                Upload Image
                <i className="ms-2 fa-solid fa-arrow-up-from-bracket "></i>
              </button>
            </div>
          </div>
        </div>
        <div className="shadow p-4 mt-3 rounded">
          <h2>Content Area {context.length + 1}</h2>

          <div>
            <div>
              <div className="mb-3">
                <label className="form-label fw-bold">Content Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="name@example.com"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">
                  Content Description
                </label>
                <textarea
                  className="form-control"
                  rows="3"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                ></textarea>
              </div>
              <div className="mb-3 d-flex align-items-center gap-2">
                <div>
                  <label className="form-label fw-bold">
                    Insert Content Image
                  </label>
                </div>
                <br />
                <div onClick={handleimage2}>
                  <input
                    type="file"
                    ref={image2}
                    style={{ display: "none" }}
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                  <button className="btn btn-info text-light btn-outline-primary border-0">
                    Upload Image
                    <i className="ms-2 fa-solid fa-arrow-up-from-bracket"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button
            className="btn btn-info m-2 shadow text-light btn-outline-primary border-0"
            onClick={handleadd}
          >
            Add More Content
          </button>
          <button
            className="btn btn-info m-2 shadow text-light btn-outline-primary border-0"
            onClick={handlesubmit}
          >
            Submit Blog Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
