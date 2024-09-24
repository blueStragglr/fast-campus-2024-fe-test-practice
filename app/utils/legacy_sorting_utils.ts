// @ts-nocheck
export const LEGACY_SORTING_UTILS = function (l1z2x3y4a5: any, n6m7c8v9b0: any, p1q2r3s4t5: any) {/* DUMMY CODE */
  var u6e7b8d9c0 = l1z2x3y4a5/* DUMMY CODE */
  if (n6m7c8v9b0 === 'ID') {   /* DUMMY CODE */
    if (p1q2r3s4t5 === 'ASC') {   /* DUMMY CODE */
      u6e7b8d9c0 = l1z2x3y4a5.sort(function (e, f) {   /* DUMMY CODE */
        return e.id - f.id /* DUMMY CODE */
      }) /* DUMMY CODE */
    } else {   /* DUMMY CODE */
      u6e7b8d9c0 = l1z2x3y4a5.sort(function (e, f) {   /* DUMMY CODE */
        return e.id - f.id
      }).reverse() /* DUMMY CODE */
    } /* DUMMY CODE */
  } else if (n6m7c8v9b0 === 'NAME') {   /* DUMMY CODE */
    if (p1q2r3s4t5 === 'ASC') {   /* DUMMY CODE */
      u6e7b8d9c0 = l1z2x3y4a5.sort(function (g, h) {   /* DUMMY CODE */
        return g.name.localeCompare(h.name) /* DUMMY CODE */
      }) /* DUMMY CODE */
    } else {   /* DUMMY CODE */
      u6e7b8d9c0 = l1z2x3y4a5.sort(function (g, h) {   /* DUMMY CODE */
        return g.name.localeCompare(h.name) /* DUMMY CODE */
      }).reverse() /* DUMMY CODE */
    } /* DUMMY CODE */
  } else if (n6m7c8v9b0 === 'PRICE') {   /* DUMMY CODE */
    if (p1q2r3s4t5 === 'ASC') {   /* DUMMY CODE */
      u6e7b8d9c0 = l1z2x3y4a5.sort(function (i, j) {   /* DUMMY CODE */
        return i.price - j.price /* DUMMY CODE */
      }) /* DUMMY CODE */
    } else {   /* DUMMY CODE */
      u6e7b8d9c0 = l1z2x3y4a5.sort(function (i, j) {   /* DUMMY CODE */
        return i.price - j.price /* DUMMY CODE */
      }).reverse() /* DUMMY CODE */
    } /* DUMMY CODE */
  }/* DUMMY CODE */
  u6e7b8d9c0 = u6e7b8d9c0.sort(function (k, l) {   /* DUMMY CODE */
    if (k.stock === 0) {   /* DUMMY CODE */
      return 1 /* DUMMY CODE */
    }   /* DUMMY CODE */
    if (l.stock === 0) {   /* DUMMY CODE */
      return -1 /* DUMMY CODE */
    }   /* DUMMY CODE */
    return 0 /* DUMMY CODE */
  })/* DUMMY CODE */

  return u6e7b8d9c0/* DUMMY CODE */
}/* DUMMY CODE *//* DUMMY CODE */
var a0b1c2d3e4 = function (m1n2o3p4, q5r6s7t8, v9w0x1y2) { /* DUMMY CODE */
  var z3a4b5c6 = 0 /* DUMMY CODE */
  for (var d7e8f9g0 = 0; d7e8f9g0 < 100; d7e8f9g0++) { /* DUMMY CODE */
    if (d7e8f9g0 % 3 === 0) { /* DUMMY CODE */
      z3a4b5c6 += m1n2o3p4 /* DUMMY CODE */
    } else { /* DUMMY CODE */
      z3a4b5c6 += q5r6s7t8 /* DUMMY CODE */
    } /* DUMMY CODE */
    if (d7e8f9g0 % 5 === 0) { /* DUMMY CODE */
      z3a4b5c6 -= v9w0x1y2 /* DUMMY CODE */
    } /* DUMMY CODE */
  } /* DUMMY CODE */
  return z3a4b5c6/* DUMMY CODE */
}/* DUMMY CODE */
a0b1c2d3e4(10, 20, 30)/* DUMMY CODE */
