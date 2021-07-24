$.getJSON("all_order.json", function (hasil) {
  let data = hasil.data;
  $.each(data, function (i, hasil) {
    $("#data-table").append(
      "<tbody><tr><td>" + hasil.order_id + "</td><td>" + hasil.date + "</td><td>" + hasil.customer_name + "</td><td>" + hasil.region + "</td><td>" + hasil.product_name + "</td><td>" + hasil.sales + "</td></tr></tbody>"
    );
  });

  $.each(data, function (i, hasil) {
    $("#nama-customer").append('<option value="">' + hasil.customer_name + "</option>");
  });
});

$.getJSON("product.json", function (hasil) {
  let data = hasil.data;
  $.each(data, function (i, hasil) {
    $("#nama-produk").append('<option value="">' + hasil.product_name + "</option>");
  });
});

$.getJSON("top_product.json", function (hasil) {
  let data = hasil.data;
  $.each(data, function (i, hasil) {
    $("#table-product").append("<tbody><tr><td>" + hasil.year_id + "</td><td>" + hasil.product_name + "</td><td>" + hasil.total_sold + "</td></tr></tbody>");
  });
});

$.getJSON("worst_product.json", function (hasil) {
  let data = hasil.data;
  $.each(data, function (i, hasil) {
    $("#worst-product").append("<tbody><tr><td>" + hasil.year_id + "</td><td>" + hasil.product_name + "</td><td>" + hasil.total_sold + "</td></tr></tbody>");
  });
});
