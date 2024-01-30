function KgToLBS(weight) {
    if (typeof weight === "number") {
        return weight * 2;
    }
    else {
        return parseInt(weight) * 3;
    }
}
KgToLBS(10);
KgToLBS('10kgs');
