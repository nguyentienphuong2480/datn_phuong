class Api{
    static url = "http://localhost:4000/api/v1/";

    static Login = this.url + 'auth/login'
    static Register = this.url + 'auth/register'
    static User = this.url + 'user/'
    static AllUser = this.url + 'user/list'

    static Brand = this.url + 'brand/';
    static AddBrand = this.url + 'brand/';
    static GetOneBrand = (id) => { return this.url + "brand/getOneBrand/" + id; };
    static EditBrand = this.url + 'brand/';
    static TrashBrand = this.url + 'brand/trash';
    static ChangeTrashBrand = this.url + 'brand/trash';

    static Product = this.url + "product/";
    static NewProduct = this.url + "product/new";
    static ProductBrand = (id) => {return this.url + "product/productbrand/" +id};
    static EditProduct = this.url + "product/";
    static AddProduct = this.url + "product/";
    static TrashProduct = this.url + "product/trash";
    static ChangeTrashProduct = this.url + "product/trash";
    static ProductDetail = (id)=>{return this.url + "product/productdetail/" + id;};
    static ProductCategory = (id)=>{return this.url + "product/productcategory/" + id;};
    static GetOneProduct = (id)=>{return this.url + "product/getOneProduct/" + id;};
    static Search = (name)=>{return this.url + "product/search/" + name;};

    static AllOrder = this.url + "order/all";
    static AddCategory = this.url + "category/";
    static ChangeTrashCategory = this.url + "category/";
    static TrashCategory = this.url + "category/trash";
    static GetOneCategory=(id) =>{return this.url + "category/getOneCategory/" +id};
    static EditCategory = this.url + "category/editCategory";

    static Cart = this.url + "cart/";
    static AddCart = this.url + "cart/";
    static DeleteCart = this.url + "cart/";
    static DeleteAllCart = this.url + "cart/all";
    static ChangeQuantityCart = this.url + "cart/";

    static Order = this.url + "order/";
    static OrderDetail = this.url + "orderdetail/";
    static AllOrderDetail = (id) =>{return this.url + "orderdetail/" +id}
    static BestSeller = this.url + "orderdetail/bestsellers";

}

export default Api;