"use client"
import React, { useState } from 'react';
import { Box, Grid, Pagination } from '@mui/material';
import ProductCard from './ProductCard'; // Adjust the import path as necessary
import FilterBar from './FilterBar';
import FilterCard from './FilterCard';

// Mock product data (replace or extend this according to your actual data structure)
const products = [
    {
        id: 1,
        name: "اسپرسوساز نون مدل CM540 3D-GS",
        image1:
            "https://s3-alpha-sig.figma.com/img/9cdd/cdda/5c9567f323a8d9d1b5ee609f833964b0?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g80ILlqIo-A0UmAvki-2QH5mqfwcvCxUiSlEhVNxtioWunb9axF1ioG~41MwYML6pKxclyx8Mq~cxvEXkz0ldvo5VjlsAyX1GnAhpaxsCkHi0Eb9in8wnqtYkfVuk~j6ooWhLf~g7TgDGEaZsbsUcnm2WybW-BcA-PNanaT2FN48~zSYL8-0FTwoRGpgG5MGbtkGPzQN7vuhDsQ3DFHFYNl7UllKm3I7nGFW-ial1Y~AqiwDhD5eKA0c~s5UIPapxImZQgxLNDD3aO-a8ePEqqyc5z1fYNQIChDirt-gkpFvYTNLbJwOb8jHKc2d5KFKeWRDkTXXh1KR27BwXgSjEg__",
        image2:
            "https://s3-alpha-sig.figma.com/img/a95b/553d/07b7f8faa305d5e35585d3a62a1ffdd3?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TPuYorwotzw5LdL~N-zqbyHZOzvIqAyVvC4SntCNrY53oJigDlOEsgDDF-FPSgOMoqIYwsNvK1VOIT1udKu92q-vDl9Tml6XatSbZ-hZWEQmj4dJHpNyfYRdyqcGTqApj1J4qayKi~XXx-WmYtJA-A9BwFVNYwXRQTP9p71np1NYjE5pGwTSAhD5q1xkEZeS6c3zbPO8lDFWGHrWRRiXtjkklRLvt7gL1Vf663jc2qbWZ6Djzn2eC6sSgUSnsyPAdYfUflowxTHFgxpeqwSFwTWHzgOryTtRBor-2yMIHA-SgvZpi4PFS03HCED3c3ifDYAm28AITeJmAhQG6PovsQ__",
        badge: 'جدید',
        price: 100,
        discount: 10
    },
    {
        id: 10,
        name: "اسپرسوساز نون مدل CM540 3D-GS",
        image1:
            "https://s3-alpha-sig.figma.com/img/9cdd/cdda/5c9567f323a8d9d1b5ee609f833964b0?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g80ILlqIo-A0UmAvki-2QH5mqfwcvCxUiSlEhVNxtioWunb9axF1ioG~41MwYML6pKxclyx8Mq~cxvEXkz0ldvo5VjlsAyX1GnAhpaxsCkHi0Eb9in8wnqtYkfVuk~j6ooWhLf~g7TgDGEaZsbsUcnm2WybW-BcA-PNanaT2FN48~zSYL8-0FTwoRGpgG5MGbtkGPzQN7vuhDsQ3DFHFYNl7UllKm3I7nGFW-ial1Y~AqiwDhD5eKA0c~s5UIPapxImZQgxLNDD3aO-a8ePEqqyc5z1fYNQIChDirt-gkpFvYTNLbJwOb8jHKc2d5KFKeWRDkTXXh1KR27BwXgSjEg__",
        image2:
            "https://s3-alpha-sig.figma.com/img/a95b/553d/07b7f8faa305d5e35585d3a62a1ffdd3?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TPuYorwotzw5LdL~N-zqbyHZOzvIqAyVvC4SntCNrY53oJigDlOEsgDDF-FPSgOMoqIYwsNvK1VOIT1udKu92q-vDl9Tml6XatSbZ-hZWEQmj4dJHpNyfYRdyqcGTqApj1J4qayKi~XXx-WmYtJA-A9BwFVNYwXRQTP9p71np1NYjE5pGwTSAhD5q1xkEZeS6c3zbPO8lDFWGHrWRRiXtjkklRLvt7gL1Vf663jc2qbWZ6Djzn2eC6sSgUSnsyPAdYfUflowxTHFgxpeqwSFwTWHzgOryTtRBor-2yMIHA-SgvZpi4PFS03HCED3c3ifDYAm28AITeJmAhQG6PovsQ__",
        badge: 'جدید',
        price: 100,
        discount: 10
    },
    {
        id: 2,
        name: "اسپرسوساز نون مدل CM540 3D-GS",
        image1:
            "https://s3-alpha-sig.figma.com/img/9cdd/cdda/5c9567f323a8d9d1b5ee609f833964b0?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g80ILlqIo-A0UmAvki-2QH5mqfwcvCxUiSlEhVNxtioWunb9axF1ioG~41MwYML6pKxclyx8Mq~cxvEXkz0ldvo5VjlsAyX1GnAhpaxsCkHi0Eb9in8wnqtYkfVuk~j6ooWhLf~g7TgDGEaZsbsUcnm2WybW-BcA-PNanaT2FN48~zSYL8-0FTwoRGpgG5MGbtkGPzQN7vuhDsQ3DFHFYNl7UllKm3I7nGFW-ial1Y~AqiwDhD5eKA0c~s5UIPapxImZQgxLNDD3aO-a8ePEqqyc5z1fYNQIChDirt-gkpFvYTNLbJwOb8jHKc2d5KFKeWRDkTXXh1KR27BwXgSjEg__",
        image2:
            "https://s3-alpha-sig.figma.com/img/a95b/553d/07b7f8faa305d5e35585d3a62a1ffdd3?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TPuYorwotzw5LdL~N-zqbyHZOzvIqAyVvC4SntCNrY53oJigDlOEsgDDF-FPSgOMoqIYwsNvK1VOIT1udKu92q-vDl9Tml6XatSbZ-hZWEQmj4dJHpNyfYRdyqcGTqApj1J4qayKi~XXx-WmYtJA-A9BwFVNYwXRQTP9p71np1NYjE5pGwTSAhD5q1xkEZeS6c3zbPO8lDFWGHrWRRiXtjkklRLvt7gL1Vf663jc2qbWZ6Djzn2eC6sSgUSnsyPAdYfUflowxTHFgxpeqwSFwTWHzgOryTtRBor-2yMIHA-SgvZpi4PFS03HCED3c3ifDYAm28AITeJmAhQG6PovsQ__",
        badge: 'تخفیف',
        price: 200,
        discount: 20
    },
    {
        id: 3,
        name: "اسپرسوساز نون مدل CM540 3D-GS",
        image1:
            "https://s3-alpha-sig.figma.com/img/9cdd/cdda/5c9567f323a8d9d1b5ee609f833964b0?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g80ILlqIo-A0UmAvki-2QH5mqfwcvCxUiSlEhVNxtioWunb9axF1ioG~41MwYML6pKxclyx8Mq~cxvEXkz0ldvo5VjlsAyX1GnAhpaxsCkHi0Eb9in8wnqtYkfVuk~j6ooWhLf~g7TgDGEaZsbsUcnm2WybW-BcA-PNanaT2FN48~zSYL8-0FTwoRGpgG5MGbtkGPzQN7vuhDsQ3DFHFYNl7UllKm3I7nGFW-ial1Y~AqiwDhD5eKA0c~s5UIPapxImZQgxLNDD3aO-a8ePEqqyc5z1fYNQIChDirt-gkpFvYTNLbJwOb8jHKc2d5KFKeWRDkTXXh1KR27BwXgSjEg__",
        image2:
            "https://s3-alpha-sig.figma.com/img/a95b/553d/07b7f8faa305d5e35585d3a62a1ffdd3?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TPuYorwotzw5LdL~N-zqbyHZOzvIqAyVvC4SntCNrY53oJigDlOEsgDDF-FPSgOMoqIYwsNvK1VOIT1udKu92q-vDl9Tml6XatSbZ-hZWEQmj4dJHpNyfYRdyqcGTqApj1J4qayKi~XXx-WmYtJA-A9BwFVNYwXRQTP9p71np1NYjE5pGwTSAhD5q1xkEZeS6c3zbPO8lDFWGHrWRRiXtjkklRLvt7gL1Vf663jc2qbWZ6Djzn2eC6sSgUSnsyPAdYfUflowxTHFgxpeqwSFwTWHzgOryTtRBor-2yMIHA-SgvZpi4PFS03HCED3c3ifDYAm28AITeJmAhQG6PovsQ__",
        badge: 'جدید',
        price: 300,
        discount: 15
    },
    // Add moname: "اسپرسوساز نون مدل CM540 3D-GS"eded to make 9
    {
        id: 4,
        name: "اسپرسوساز نون مدل CM540 3D-GS",
        image1:
            "https://s3-alpha-sig.figma.com/img/9cdd/cdda/5c9567f323a8d9d1b5ee609f833964b0?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g80ILlqIo-A0UmAvki-2QH5mqfwcvCxUiSlEhVNxtioWunb9axF1ioG~41MwYML6pKxclyx8Mq~cxvEXkz0ldvo5VjlsAyX1GnAhpaxsCkHi0Eb9in8wnqtYkfVuk~j6ooWhLf~g7TgDGEaZsbsUcnm2WybW-BcA-PNanaT2FN48~zSYL8-0FTwoRGpgG5MGbtkGPzQN7vuhDsQ3DFHFYNl7UllKm3I7nGFW-ial1Y~AqiwDhD5eKA0c~s5UIPapxImZQgxLNDD3aO-a8ePEqqyc5z1fYNQIChDirt-gkpFvYTNLbJwOb8jHKc2d5KFKeWRDkTXXh1KR27BwXgSjEg__",
        image2:
            "https://s3-alpha-sig.figma.com/img/a95b/553d/07b7f8faa305d5e35585d3a62a1ffdd3?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TPuYorwotzw5LdL~N-zqbyHZOzvIqAyVvC4SntCNrY53oJigDlOEsgDDF-FPSgOMoqIYwsNvK1VOIT1udKu92q-vDl9Tml6XatSbZ-hZWEQmj4dJHpNyfYRdyqcGTqApj1J4qayKi~XXx-WmYtJA-A9BwFVNYwXRQTP9p71np1NYjE5pGwTSAhD5q1xkEZeS6c3zbPO8lDFWGHrWRRiXtjkklRLvt7gL1Vf663jc2qbWZ6Djzn2eC6sSgUSnsyPAdYfUflowxTHFgxpeqwSFwTWHzgOryTtRBor-2yMIHA-SgvZpi4PFS03HCED3c3ifDYAm28AITeJmAhQG6PovsQ__",
        badge: 'جدید',
        price: 400,
        discount: 10
    },
    {
        id: 5,
        name: "اسپرسوساز نون مدل CM540 3D-GS",
        image1:
            "https://s3-alpha-sig.figma.com/img/9cdd/cdda/5c9567f323a8d9d1b5ee609f833964b0?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g80ILlqIo-A0UmAvki-2QH5mqfwcvCxUiSlEhVNxtioWunb9axF1ioG~41MwYML6pKxclyx8Mq~cxvEXkz0ldvo5VjlsAyX1GnAhpaxsCkHi0Eb9in8wnqtYkfVuk~j6ooWhLf~g7TgDGEaZsbsUcnm2WybW-BcA-PNanaT2FN48~zSYL8-0FTwoRGpgG5MGbtkGPzQN7vuhDsQ3DFHFYNl7UllKm3I7nGFW-ial1Y~AqiwDhD5eKA0c~s5UIPapxImZQgxLNDD3aO-a8ePEqqyc5z1fYNQIChDirt-gkpFvYTNLbJwOb8jHKc2d5KFKeWRDkTXXh1KR27BwXgSjEg__",
        image2:
            "https://s3-alpha-sig.figma.com/img/a95b/553d/07b7f8faa305d5e35585d3a62a1ffdd3?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TPuYorwotzw5LdL~N-zqbyHZOzvIqAyVvC4SntCNrY53oJigDlOEsgDDF-FPSgOMoqIYwsNvK1VOIT1udKu92q-vDl9Tml6XatSbZ-hZWEQmj4dJHpNyfYRdyqcGTqApj1J4qayKi~XXx-WmYtJA-A9BwFVNYwXRQTP9p71np1NYjE5pGwTSAhD5q1xkEZeS6c3zbPO8lDFWGHrWRRiXtjkklRLvt7gL1Vf663jc2qbWZ6Djzn2eC6sSgUSnsyPAdYfUflowxTHFgxpeqwSFwTWHzgOryTtRBor-2yMIHA-SgvZpi4PFS03HCED3c3ifDYAm28AITeJmAhQG6PovsQ__",
        badge: 'تخفیف',
        price: 500,
        discount: 5
    },
    {
        id: 6,
        name: "اسپرسوساز نون مدل CM540 3D-GS",
        image1:
            "https://s3-alpha-sig.figma.com/img/9cdd/cdda/5c9567f323a8d9d1b5ee609f833964b0?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g80ILlqIo-A0UmAvki-2QH5mqfwcvCxUiSlEhVNxtioWunb9axF1ioG~41MwYML6pKxclyx8Mq~cxvEXkz0ldvo5VjlsAyX1GnAhpaxsCkHi0Eb9in8wnqtYkfVuk~j6ooWhLf~g7TgDGEaZsbsUcnm2WybW-BcA-PNanaT2FN48~zSYL8-0FTwoRGpgG5MGbtkGPzQN7vuhDsQ3DFHFYNl7UllKm3I7nGFW-ial1Y~AqiwDhD5eKA0c~s5UIPapxImZQgxLNDD3aO-a8ePEqqyc5z1fYNQIChDirt-gkpFvYTNLbJwOb8jHKc2d5KFKeWRDkTXXh1KR27BwXgSjEg__",
        image2:
            "https://s3-alpha-sig.figma.com/img/a95b/553d/07b7f8faa305d5e35585d3a62a1ffdd3?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TPuYorwotzw5LdL~N-zqbyHZOzvIqAyVvC4SntCNrY53oJigDlOEsgDDF-FPSgOMoqIYwsNvK1VOIT1udKu92q-vDl9Tml6XatSbZ-hZWEQmj4dJHpNyfYRdyqcGTqApj1J4qayKi~XXx-WmYtJA-A9BwFVNYwXRQTP9p71np1NYjE5pGwTSAhD5q1xkEZeS6c3zbPO8lDFWGHrWRRiXtjkklRLvt7gL1Vf663jc2qbWZ6Djzn2eC6sSgUSnsyPAdYfUflowxTHFgxpeqwSFwTWHzgOryTtRBor-2yMIHA-SgvZpi4PFS03HCED3c3ifDYAm28AITeJmAhQG6PovsQ__",
        badge: 'جدید',
        price: 600,
        discount: 25
    },
    {
        id: 7,
        name: "اسپرسوساز نون مدل CM540 3D-GS",
        image1:
            "https://s3-alpha-sig.figma.com/img/9cdd/cdda/5c9567f323a8d9d1b5ee609f833964b0?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g80ILlqIo-A0UmAvki-2QH5mqfwcvCxUiSlEhVNxtioWunb9axF1ioG~41MwYML6pKxclyx8Mq~cxvEXkz0ldvo5VjlsAyX1GnAhpaxsCkHi0Eb9in8wnqtYkfVuk~j6ooWhLf~g7TgDGEaZsbsUcnm2WybW-BcA-PNanaT2FN48~zSYL8-0FTwoRGpgG5MGbtkGPzQN7vuhDsQ3DFHFYNl7UllKm3I7nGFW-ial1Y~AqiwDhD5eKA0c~s5UIPapxImZQgxLNDD3aO-a8ePEqqyc5z1fYNQIChDirt-gkpFvYTNLbJwOb8jHKc2d5KFKeWRDkTXXh1KR27BwXgSjEg__",
        image2:
            "https://s3-alpha-sig.figma.com/img/a95b/553d/07b7f8faa305d5e35585d3a62a1ffdd3?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TPuYorwotzw5LdL~N-zqbyHZOzvIqAyVvC4SntCNrY53oJigDlOEsgDDF-FPSgOMoqIYwsNvK1VOIT1udKu92q-vDl9Tml6XatSbZ-hZWEQmj4dJHpNyfYRdyqcGTqApj1J4qayKi~XXx-WmYtJA-A9BwFVNYwXRQTP9p71np1NYjE5pGwTSAhD5q1xkEZeS6c3zbPO8lDFWGHrWRRiXtjkklRLvt7gL1Vf663jc2qbWZ6Djzn2eC6sSgUSnsyPAdYfUflowxTHFgxpeqwSFwTWHzgOryTtRBor-2yMIHA-SgvZpi4PFS03HCED3c3ifDYAm28AITeJmAhQG6PovsQ__",
        badge: 'جدید',
        price: 700,
        discount: 10
    },
    {
        id: 8,
        name: "اسپرسوساز نون مدل CM540 3D-GS",
        image1:
            "https://s3-alpha-sig.figma.com/img/9cdd/cdda/5c9567f323a8d9d1b5ee609f833964b0?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g80ILlqIo-A0UmAvki-2QH5mqfwcvCxUiSlEhVNxtioWunb9axF1ioG~41MwYML6pKxclyx8Mq~cxvEXkz0ldvo5VjlsAyX1GnAhpaxsCkHi0Eb9in8wnqtYkfVuk~j6ooWhLf~g7TgDGEaZsbsUcnm2WybW-BcA-PNanaT2FN48~zSYL8-0FTwoRGpgG5MGbtkGPzQN7vuhDsQ3DFHFYNl7UllKm3I7nGFW-ial1Y~AqiwDhD5eKA0c~s5UIPapxImZQgxLNDD3aO-a8ePEqqyc5z1fYNQIChDirt-gkpFvYTNLbJwOb8jHKc2d5KFKeWRDkTXXh1KR27BwXgSjEg__",
        image2:
            "https://s3-alpha-sig.figma.com/img/a95b/553d/07b7f8faa305d5e35585d3a62a1ffdd3?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TPuYorwotzw5LdL~N-zqbyHZOzvIqAyVvC4SntCNrY53oJigDlOEsgDDF-FPSgOMoqIYwsNvK1VOIT1udKu92q-vDl9Tml6XatSbZ-hZWEQmj4dJHpNyfYRdyqcGTqApj1J4qayKi~XXx-WmYtJA-A9BwFVNYwXRQTP9p71np1NYjE5pGwTSAhD5q1xkEZeS6c3zbPO8lDFWGHrWRRiXtjkklRLvt7gL1Vf663jc2qbWZ6Djzn2eC6sSgUSnsyPAdYfUflowxTHFgxpeqwSFwTWHzgOryTtRBor-2yMIHA-SgvZpi4PFS03HCED3c3ifDYAm28AITeJmAhQG6PovsQ__",
        badge: 'تخفیف',
        price: 800,
        discount: 20
    },
    {
        id: 9,
        name: "اسپرسوساز نون مدل CM540 3D-GS",
        image1:
            "https://s3-alpha-sig.figma.com/img/9cdd/cdda/5c9567f323a8d9d1b5ee609f833964b0?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g80ILlqIo-A0UmAvki-2QH5mqfwcvCxUiSlEhVNxtioWunb9axF1ioG~41MwYML6pKxclyx8Mq~cxvEXkz0ldvo5VjlsAyX1GnAhpaxsCkHi0Eb9in8wnqtYkfVuk~j6ooWhLf~g7TgDGEaZsbsUcnm2WybW-BcA-PNanaT2FN48~zSYL8-0FTwoRGpgG5MGbtkGPzQN7vuhDsQ3DFHFYNl7UllKm3I7nGFW-ial1Y~AqiwDhD5eKA0c~s5UIPapxImZQgxLNDD3aO-a8ePEqqyc5z1fYNQIChDirt-gkpFvYTNLbJwOb8jHKc2d5KFKeWRDkTXXh1KR27BwXgSjEg__",
        image2:
            "https://s3-alpha-sig.figma.com/img/a95b/553d/07b7f8faa305d5e35585d3a62a1ffdd3?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TPuYorwotzw5LdL~N-zqbyHZOzvIqAyVvC4SntCNrY53oJigDlOEsgDDF-FPSgOMoqIYwsNvK1VOIT1udKu92q-vDl9Tml6XatSbZ-hZWEQmj4dJHpNyfYRdyqcGTqApj1J4qayKi~XXx-WmYtJA-A9BwFVNYwXRQTP9p71np1NYjE5pGwTSAhD5q1xkEZeS6c3zbPO8lDFWGHrWRRiXtjkklRLvt7gL1Vf663jc2qbWZ6Djzn2eC6sSgUSnsyPAdYfUflowxTHFgxpeqwSFwTWHzgOryTtRBor-2yMIHA-SgvZpi4PFS03HCED3c3ifDYAm28AITeJmAhQG6PovsQ__",
        badge: 'جدید',
        price: 900,
        discount: 15
    },
];

const PRODUCTS_PER_PAGE = 9;

const ProductsGrid = () => {
    const [page, setPage] = useState(1);
    const pageCount = Math.ceil(products.length / PRODUCTS_PER_PAGE);
    const handleChange = (event, value) => {
        setPage(value);
    };
    // Get the products for the current page
    const paginatedProducts = products.slice((page - 1) * PRODUCTS_PER_PAGE, page * PRODUCTS_PER_PAGE);

    return (
        <Box sx={{ flexGrow: 1, mr: { xs: 3, sm: 5, md: 7 } }}>
            <Grid container spacing={8} justifyContent="flex-end">
                <Grid item xs={12} sm={10} md={9} lg={10}>
                    <FilterBar filterNames={['پرفروش‌ترین', 'جدیدترین', 'ارزان‌ترین', 'گران‌ترین']} />
                </Grid>
                <FilterCard filterList={[{ name: 'فقط کالاهای موجود', label: 'فقط کالاهای موجود' }, { name: 'ارسال رایگان', label: 'ارسال رایگان' }, { name: 'فروش ویژه', label: 'فروش ویژه' }]} dropdownOptions={['سامسونگ', 'شیائومی', 'اپل']} />
                <Grid item xs={12} sm={10} md={9} lg={8}>
                    <Grid container spacing={3}>
                        {paginatedProducts.map((product) => (
                            <Grid item xs={12} sm={6} md={4} key={product.id}>
                                <ProductCard product={product} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'right', marginTop: 2 }}>
                <Pagination shape="rounded" count={pageCount} page={page} onChange={handleChange} boundaryCount={5} color="secondary" />
            </Box>
        </Box>
    );
};

export default ProductsGrid;
