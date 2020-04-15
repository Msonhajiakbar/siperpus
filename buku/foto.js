var pesan;
$("#fa").click(function() {
    $("#modul").css("display", "block");


    $(".modul-footer #btn").click(function() {
        var ari = $("#file").prop("files")[0];
        var form = new FormData();
        form.append("file", ari);

        $.ajax({
            url: "prosestambah.php",
            dataType: 'script',
            cache: false,
            contentType: false,
            processData: false,
            data: form,
            type: 'post',
            success: function(response) {
                if (!response == 0) {
                    $("#im").attr("src", response);
                    $("#modul").css("display", "none");
                    pesan = $("#im").attr("src");;
                } else {
                    alert("gagal");
                    $("#modul").css("display", "none");
                }
            }
        });


    });

});
$(".clos").click(function() {
    $("#modul").css("display", "none");

});

$("#simpan").click(function() {
    if (pesan == null) {
        pesan = "buku.png"
    }

    $.post("prosestambah.php", {
            attrr: pesan,
            tmp: pesan,
            judul: $(".judul").val(),
            penerbit: $(".penerbit").val(),
            pengarang: $(".pengarang").val(),
            ringkasan: $(".ringkasan").val(),
            stok: $(".stok").val(),
            katagori: $(".katagori").val(),
        },
        function(data) {
            $(".tb").each(function() {
                $(this).prop("disabled", true);
            });
            alert(data);
        }
    );
});


//edit
var pesanhapus;
var pesanedit;
$("#fotoedit").click(function() {
    $("#modul").css("display", "block");

    if ($("#im").attr("src") == "foto/buku.png") {
        $(".t-content").hide();
    } else {
        $("#trash").click(function() {
            pesanhapus = $("#im").attr("src");
            $.post("prosesedit.php", {
                    hp: pesanhapus
                },
                function(data) {
                    $(".modul-footer #btn").click(function() {
                        $("#im").attr("src", data);
                        pesanedit = data;
                        $("#modul").css("display", "none");
                    });
                }
            );
        });
    }
    $(".modul-footer #btn").click(function() {


        var ari = $("#file").prop("files")[0];
        var form = new FormData();
        form.append("file", ari);
        if (ari !== undefined) {
            $.ajax({
                url: "prosesedit.php",
                dataType: 'script',
                cache: false,
                contentType: false,
                processData: false,
                data: form,
                type: 'post',
                success: function(response) {
                    if (!response == 0) {
                        if ($("#im").attr("src") !== "foto/buku.png") {
                            pesanhapus = $("#im").attr("src");
                        }
                        $("#im").attr("src", response);
                        $("#modul").css("display", "none");

                        pesanedit = $("#im").attr("src");;
                    }
                }
            });
        }

    });

});
$("#simpanedit").click(function() {
    $.post("prosesedit.php", {
            hapus: pesanhapus,
            attrr: pesanedit,
            tmp: pesanedit,
            id: $(".id_buku").val(),
            judul: $(".judul").val(),
            penerbit: $(".penerbit").val(),
            pengarang: $(".pengarang").val(),
            ringkasan: $(".ringkasan").val(),
            stok: $(".stok").val(),
            katagori: $(".katagori").val(),
        },
        function(data) {
            $(".tb").each(function() {
                $(this).prop("disabled", true);
            });
            alert(data);
        }
    );
});