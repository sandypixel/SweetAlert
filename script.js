let nama, val;
const url_string = document.URL;
const url = new URL(url_string);
let sender;

if (url.searchParams.get('by') != null) {
    sender = url.searchParams.get('by');
} else {
    sender = "aku";
}


document.querySelector("#tombol").addEventListener('click', function () {
    Swal.fire("P", "mau nanya, boleh?", "question").then(function () {
    Swal.fire("jangan boong, oke!", "", "warning").then(function () {
        Swal.fire("boong dosa, masuk neraka lo!!", "", "warning").then(function () {

        }).then(function () {
            const pertanyaan = Swal.fire({
            title: `sayang kan sama ${sender}?`,
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: `Sayang`,
            denyButtonText: `Gak`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
            Swal.fire(`${sender} juga sayang kamu kok`).then(function () {
                Swal.fire({
                    title: 'sayangnya sampe berapa emang?',
                    icon: 'question',
                    input: 'range',
                    inputLabel: '1 - 100 ya',
                    inputAttributes: {
                    min: 1,
                    max: 100,
                    step: 1
                },
                inputValue: 50
                }).then((e) => {
                val = e.value
                Swal.fire(`Makasih ya udah sayang ${sender} ${val}%`).then(function () {
                    Swal.fire({
                        title: `rindu ${sender}?`,
                        showDenyButton: true,
                        showCancelButton: false,
                        confirmButtonText: `rindu`,
                        denyButtonText: `Gak!`,
                    }).then((result) => {
                      /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        Swal.fire(`samaaa ${sender} juga :(`).then(function () {
                            Swal.fire('aku ada permintaan sayang').then(function () {
                                Swal.fire('nanti kirim p buat aku dong :)').then(function() {
                                    Swal.fire('aku ada hadiah buat kamu').then(function() {
                                        Swal.fire('tekan lop merah dibawah dong')
                                    })
                                })
                        })
                        })
                    } else if (result.isDenied) {
                        Swal.fire('jahat, padahal udah lama gk jumpa', '', 'error').then(function () {
                        Swal.fire('oke! awas kalo bilang rindu', '', 'warning')
                        })
                    }
                    })
                })
                })
            })
            } else if (result.isDenied) {
            Swal.fire(`Yakin ga sayang sama ${sender}?`, '', 'warning').then(function () {
                Swal.fire('oke! gapapa, daaa...')
            })
            }
        })
        })
    });
    });
});
