document.addEventListener('DOMContentLoaded', function () {
    const pianoParts = document.querySelectorAll('.piano-partes');

    pianoParts.forEach(part => {
        const icono = part.querySelector('.mostrar-icono');
        const previsualizaciones = part.querySelector('.previsualizaciones');
        const previsualizacionImages = previsualizaciones.querySelectorAll('.previsualizacion');
        const portadaContainer = part.querySelector('.piano-portada');
        const portada = portadaContainer.querySelector('.portada-img1');
        let currentIndex = 0;

        icono.addEventListener('click', function () {
            portada.style.display = 'none';
            previsualizacionImages.forEach(image => {
                image.style.display = 'none';
            });

            if (currentIndex < previsualizacionImages.length) {
                previsualizacionImages[currentIndex].style.display = 'block';
                portadaContainer.appendChild(previsualizacionImages[currentIndex]);
                portadaContainer.appendChild(icono);  
                currentIndex++;
            } else {
                currentIndex = 0;
                portada.style.display = 'block';
                portadaContainer.appendChild(portada);
                portadaContainer.appendChild(icono);  
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const pianoPartes = document.querySelectorAll('.piano-partes1');

    pianoPartes.forEach(part => {
        const icono1 = part.querySelector('.mostrar-icono1');
        const previsualizaciones1 = part.querySelector('.previsualizaciones1');
        const previsualizacionImages1 = previsualizaciones1.querySelectorAll('.previsualizacion1');
        const portadaContainer1 = part.querySelector('.piano-portada1');
        const portada1 = portadaContainer1.querySelector('.portada-img1');
        let currentIndex = 0;

        icono1.addEventListener('click', function () {
            portada1.style.display = 'none';
            previsualizacionImages1.forEach(image => {
                image.style.display = 'none';
            });

            if (currentIndex < previsualizacionImages1.length) {
                previsualizacionImages1[currentIndex].style.display = 'block';
                portadaContainer1.appendChild(previsualizacionImages1[currentIndex]);
                portadaContainer1.appendChild(icono1);  
                currentIndex++;
            } else {
                currentIndex = 0;
                portada1.style.display = 'block';
                portadaContainer1.appendChild(portada1);
                portadaContainer1.appendChild(icono1);  
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.05
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.fade-in1');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.20
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector(".hero-partituras");
    const imagen = document.querySelector(".hero-img-partituras");
    const titulo = document.querySelector(".hero-title-partituras");

    function actualizarHero() {
        if (!hero || !imagen) return;

        const scrollY = window.scrollY;
        const rect = hero.getBoundingClientRect();

        if (rect.bottom > 0) {
            const desplazamiento = scrollY * 0.45;
            const escala = window.innerWidth <= 768
                ? Math.max(1.0 - scrollY * 0.0003, 1)
                : Math.max(1 - scrollY * 0.0002, 1);

            imagen.style.transform = `translate3d(0,${desplazamiento}px,0) scale(${escala})`;

            if (titulo) {
                const movimientoTitulo = scrollY * 0.65;
                titulo.style.transform = `translateY(calc(-50% + ${movimientoTitulo}px))`;
                titulo.style.opacity = Math.max(1 - scrollY / 500, 0);
            }
        }
    }

    actualizarHero();

    window.addEventListener("scroll", actualizarHero, {
        passive: true
    });
});

/*==========================
        CARRITO
==========================*/

document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const floatingCart = document.getElementById("floating-cart");
    const cartModal = document.getElementById("cart-modal");
    const closeCart = document.getElementById("close-cart");
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");

    const checkoutEmail = document.getElementById("checkout-email");
    const paypalButtonContainer = document.getElementById("paypal-button-container");
    const paypalDisabled = document.getElementById("paypal-disabled");

    function saveCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    document.querySelectorAll(".piano-descargas").forEach(btn => {
        btn.addEventListener("click", () => {
            const title = btn.dataset.title;
            const existingItem = cart.find(item => item.title === title);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({
                    title: btn.dataset.title,
                    price: Number(btn.dataset.price),
                    image: btn.dataset.image,
                    quantity: 1
                });
            }

            renderCart();
            saveCart();
            cartModal.classList.add("show");
        });
    });

    function renderCart() {
        cartItems.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            total += item.price * item.quantity;

            cartItems.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.title}">
                <div class="cart-info">
                    <div class="cart-title">
                        ${item.title}
                    </div>

                    <div class="quantity-control">
                        <button class="qty-minus" data-index="${index}" aria-label="Restar">
                            <i class="bi bi-dash"></i>
                        </button>
                        <span class="qty-number">
                            ${item.quantity}
                        </span>
                        <button class="qty-plus" data-index="${index}" aria-label="Sumar">
                            <i class="bi bi-plus"></i>
                        </button>
                    </div>
                </div>

                <div class="cart-right">
                    <div class="cart-price">
                        €${(item.price * item.quantity).toFixed(2)}
                    </div>
                    <button class="remove-item" data-index="${index}">
                        <i class="bi bi-trash3"></i>
                    </button>
                </div>
            </div>
            `;
        });

        cartTotal.textContent = `€${total.toFixed(2)}`;
        cartCount.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
        floatingCart.classList.toggle("show", cart.length > 0);

        document.querySelectorAll(".qty-plus").forEach(btn => {
            btn.onclick = () => {
                cart[btn.dataset.index].quantity++;
                renderCart();
                saveCart();
            };
        });

        document.querySelectorAll(".qty-minus").forEach(btn => {
            btn.onclick = () => {
                const item = cart[btn.dataset.index];
                item.quantity--;

                if (item.quantity <= 0) {
                    cart.splice(btn.dataset.index, 1);
                }

                renderCart();
                saveCart();

                if (!cart.length) {
                    cartModal.classList.remove("show");
                }
            };
        });

        document.querySelectorAll(".remove-item").forEach(btn => {
            btn.onclick = () => {
                cart.splice(btn.dataset.index, 1);
                renderCart();
                saveCart();

                if (!cart.length) {
                    cartModal.classList.remove("show");
                }
            };
        });
    }

    if (floatingCart) {
        floatingCart.addEventListener("click", () => {
            cartModal.classList.add("show");
        });
    }

    if (closeCart) {
        closeCart.addEventListener("click", () => {
            cartModal.classList.remove("show");
        });
    }

    if (cartModal) {
        cartModal.addEventListener("click", e => {
            if (e.target === cartModal) {
                cartModal.classList.remove("show");
            }
        });
    }

    renderCart();

    /*==========================
            CHECKOUT
    ==========================*/

    const FORMSPREE_ENDPOINT = "https://formspree.io/f/xkjwbdyd";
    const PAYPAL_CLIENT_ID = "BAA0yZFXeRjD-egJv4tAhbFLGp-JFlUAGEIXMmDQq8cdlWEqJAthOjCJ3y0knZxntEhbaqmVnGZELgd1iE";

    const checkoutBtn = document.getElementById("checkout-btn");
    const checkoutModal = document.getElementById("checkout-modal");
    const closeCheckout = document.getElementById("close-checkout");
    const checkoutSummaryItems = document.getElementById("checkout-summary-items");
    const checkoutSubtotal = document.getElementById("checkout-subtotal");
    const checkoutTotalEl = document.getElementById("checkout-total");
    const checkoutError = document.getElementById("checkout-error");

    // Función de limpieza completa del formulario y PayPal
    function resetCheckoutForm() {
        const emailInput = document.getElementById("checkout-email");
        const phoneInput = document.getElementById("checkout-phone");
        const firstNameInput = document.getElementById("checkout-firstname");
        const lastNameInput = document.getElementById("checkout-lastname");
        const noteInput = document.getElementById("checkout-note");

        if (emailInput) emailInput.value = "";
        if (phoneInput) phoneInput.value = "";
        if (firstNameInput) firstNameInput.value = "";
        if (lastNameInput) lastNameInput.value = "";
        if (noteInput) noteInput.value = "";

        if (checkoutError) checkoutError.style.display = "none";

        if (paypalButtonContainer) {
            paypalButtonContainer.style.display = "none";
            delete paypalButtonContainer.dataset.loaded;
            paypalButtonContainer.innerHTML = "";
        }

        if (paypalDisabled) {
            paypalDisabled.classList.remove("hidden");
        }
    }

    function renderCheckoutSummary() {
        let total = 0;
        checkoutSummaryItems.innerHTML = "";

        cart.forEach(item => {
            total += item.price * item.quantity;

            checkoutSummaryItems.innerHTML += `
                <div class="checkout-summary-item">
                    <img src="${item.image}" alt="${item.title}">
                    <div class="checkout-summary-info">
                        <span>${item.title}</span>
                        <small>x${item.quantity}</small>
                    </div>
                    <span class="checkout-summary-price">
                        €${(item.price * item.quantity).toFixed(2)}
                    </span>
                </div>
            `;
        });

        checkoutSubtotal.textContent = `€${total.toFixed(2)}`;
        checkoutTotalEl.textContent = `€${total.toFixed(2)}`;

        return total;
    }

    function validateCheckoutForm() {
        const email = document.getElementById("checkout-email").value.trim();
        const firstName = document.getElementById("checkout-firstname").value.trim();
        const lastName = document.getElementById("checkout-lastname").value.trim();

        if (!email || !firstName || !lastName) {
            checkoutError.textContent = "Completá email, nombre y apellido antes de pagar.";
            checkoutError.style.display = "block";
            return false;
        }

        checkoutError.style.display = "none";
        return true;
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function loadPayPalSDK(callback) {
        if (window.paypal) {
            callback();
            return;
        }

        const script = document.createElement("script");
        script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=EUR`;
        script.onload = callback;
        script.onerror = () => {
            checkoutError.textContent = "No se pudo cargar PayPal. Probá de nuevo en un momento.";
            checkoutError.style.display = "block";
        };

        document.body.appendChild(script);
    }

    function renderPayPalButton(total) {
        const container = document.getElementById("paypal-button-container");
        container.innerHTML = "";

        paypal.Buttons({
            style: {
                color: "gold",
                shape: "rect",
                label: "pay"
            },
            onClick: (data, actions) => {
                if (!validateCheckoutForm()) {
                    return actions.reject();
                }
                return actions.resolve();
            },
            createOrder: (data, actions) => {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: total.toFixed(2),
                            currency_code: "EUR"
                        }
                    }]
                });
            },
            onApprove: (data, actions) => {
                return actions.order.capture().then(details => {
                    sendOrderToFormspree(details, total);
                    showCheckoutSuccess();
                });
            },
            onError: err => {
                checkoutError.textContent = "Hubo un error al procesar el pago. Intentá de nuevo.";
                checkoutError.style.display = "block";
                console.error(err);
            }
        }).render("#paypal-button-container");
    }

    function sendOrderToFormspree(paypalDetails, total) {
        const payload = {
            email: document.getElementById("checkout-email").value.trim(),
            phone: document.getElementById("checkout-phone").value.trim(),
            firstName: document.getElementById("checkout-firstname").value.trim(),
            lastName: document.getElementById("checkout-lastname").value.trim(),
            note: document.getElementById("checkout-note").value.trim(),
            total: `€${total.toFixed(2)}`,
            paypalOrderId: paypalDetails.id,
            paypalPayerEmail: paypalDetails.payer?.email_address || "",
            items: cart.map(item => `${item.title} x${item.quantity} - €${(item.price * item.quantity).toFixed(2)}`).join("\n")
        };

        fetch(FORMSPREE_ENDPOINT, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        }).catch(err => {
            console.error("Error enviando el pedido:", err);
        });
    }

    function showCheckoutSuccess() {
        document.querySelector(".checkout-form").innerHTML = `
            <div class="checkout-success">
                <i class="bi bi-check-circle-fill"></i>
                <h2>¡Gracias por tu compra!</h2>
                <p>Te enviamos la confirmación por email. En breve vas a recibir el material.</p>
                <button id="new-purchase-btn" class="btn-primary" style="margin-top: 20px;">Hacer otra compra</button>
            </div>
        `;

        cart.length = 0;
        saveCart();
        renderCart();

        const newPurchaseBtn = document.getElementById("new-purchase-btn");
        if (newPurchaseBtn) {
            newPurchaseBtn.addEventListener("click", () => {
                if (checkoutModal) checkoutModal.classList.remove("show");
                window.location.reload();
            });
        }
    }

    if (checkoutBtn) {
        checkoutBtn.addEventListener("click", () => {
            if (!cart.length) return;

            cartModal.classList.remove("show");
            checkoutModal.classList.add("show");

            renderCheckoutSummary();

            if (paypalButtonContainer) {
                paypalButtonContainer.style.display = "none";
            }

            if (paypalDisabled) {
                paypalDisabled.classList.remove("hidden");
            }
        });
    }

    if (checkoutEmail) {
        checkoutEmail.addEventListener("input", () => {
            const email = checkoutEmail.value.trim();
            const emailValido = isValidEmail(email);

            if (emailValido) {
                if (paypalDisabled) {
                    paypalDisabled.classList.add("hidden");
                }

                if (paypalButtonContainer) {
                    paypalButtonContainer.style.display = "block";
                }

                if (!paypalButtonContainer.dataset.loaded) {
                    const total = renderCheckoutSummary();

                    loadPayPalSDK(() => {
                        renderPayPalButton(total);
                        paypalButtonContainer.dataset.loaded = "true";
                    });
                }
            } else {
                if (paypalDisabled) {
                    paypalDisabled.classList.remove("hidden");
                }

                if (paypalButtonContainer) {
                    paypalButtonContainer.style.display = "none";
                }
            }
        });
    }

    if (closeCheckout) {
        closeCheckout.addEventListener("click", () => {
            checkoutModal.classList.remove("show");
            resetCheckoutForm();
        });
    }

    if (checkoutModal) {
        checkoutModal.addEventListener("click", e => {
            if (e.target === checkoutModal) {
                checkoutModal.classList.remove("show");
                resetCheckoutForm();
            }
        });
    }
});