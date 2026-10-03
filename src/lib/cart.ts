import { formatPrice } from "@/lib/format";

export function openCart() {
    document.body.classList.add("cart-open");
}

export function closeCart() {
    document.body.classList.remove("cart-open");
}

export function changeQuantity(button: HTMLElement, delta: number) {
    const item = button.closest<HTMLElement>("[data-price]");
    const qtyEl = item?.querySelector<HTMLElement>(".qty-value");
    if (!item || !qtyEl) return;
    const next = Math.max(1, Number(qtyEl.textContent) + delta);
    qtyEl.textContent = String(next);
    updateTotals();
}

function updateTotals() {
    let subtotal = 0;
    document.querySelectorAll<HTMLElement>("[data-price]").forEach((item) => {
        const qty = Number(item.querySelector(".qty-value")?.textContent ?? 1);
        subtotal += Number(item.dataset.price) * qty;
    });
    const text = formatPrice(subtotal);
    document.querySelectorAll(".cart-subtotal, .cart-total").forEach((el) => {
        el.textContent = text;
    });
}
