  // rule 110 (¬p∧r) ∨ (q⊕r)
  const rule110 = function(l = 0, c = 0, r = 0) {
    if (l == 1 && c == 1 && r == 1) {
     return 0
    }
    if (l == 1 && c == 1 && r == 0) {
      return 1
    }
    if (l == 1 && c == 0 && r == 1) {
      return 1
    }
    if (l == 1 && c == 0 && r == 0) {
      return 0
    }
    if (l == 0 && c == 1 && r == 1) {
      return 1
    }
    if (l == 0 && c == 1 && r == 0) {
      return 1
    }
    if (l == 0 && c == 0 && r == 1) {
      return 1
    }
    if (l == 0 && c == 0 && r == 0) {
      return 0
    }
  }
