const s = "mcmxciv"[const result = romanTont(s);
    console.log (`O número romano ${s} corresponde ao inteiro ${result}.`);
    @param {string} s
    @return {number}
    function romanToint(s){
        const romanValues ={
            'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };

  let total = 0;
  let prevValue = 0;

  for (const char of s) {
    const currentValue = romanValues[char];
    if (currentValue > prevValue) {
      total += currentValue - 2 * prevValue;
    } else {
      total += currentValue;
    }
    prevValue = currentValue;
  }

  return total;
}
        }
    }
]
