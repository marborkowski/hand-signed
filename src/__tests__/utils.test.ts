import * as Utils from "../utils";

it("sinusWaveY", () => {
  const data = [];

  for (let i = 0; i < 200; i++) {
    const sinus = Utils.sinusWaveY(i);

    data.push(sinus);

    expect(sinus).toBeGreaterThanOrEqual(0);
    expect(sinus).toBeLessThanOrEqual(20);
  }

  expect(data).toMatchSnapshot();
});

it("getCoordinatesFromEvent - TouchEvent", () => {
  const event = {
    target: {
      getBoundingClientRect: () => {
        return {
          left: 10,
          top: 20,
        };
      },
    },
    changedTouches: [
      {
        clientX: 100,
        clientY: 50,
      },
    ],
  };

  expect(Utils.getCoordinatesFromEvent(event)).toEqual({ x: 90, y: 30 });
});

it("getCoordinatesFromEvent - MouseEvent", () => {
  const event = {
    target: {
      getBoundingClientRect: () => {
        return {
          left: 10,
          top: 20,
        };
      },
    },
    clientX: 100,
    clientY: 50,
  };

  expect(Utils.getCoordinatesFromEvent(event)).toEqual({ x: 90, y: 30 });
});

it("animateInitialData", async () => {
  const ctx = {
    beginPath: jest.fn(),
    moveTo: jest.fn(),
    lineTo: jest.fn(),
    stroke: jest.fn(),
  } as any;

  const data = [
    { x: 78, y: 212 },
    { x: 78, y: 213 },
    { x: 78, y: 214 },
    { x: 78, y: 216 },
    { x: 79, y: 218 },
    { x: 81, y: 221 },
    { x: 84, y: 223 },
    { x: 89, y: 225 },
    { x: 96, y: 227 },
    { x: 104, y: 228 },
    { x: 116, y: 229 },
    { x: 129, y: 229 },
    { x: 141, y: 229 },
    { x: 153, y: 226 },
    { x: 162, y: 221 },
    { x: 169, y: 214 },
    { x: 175, y: 205 },
    { x: 180, y: 195 },
    { x: 183, y: 185 },
    { x: 184, y: 177 },
    { x: 184, y: 171 },
    { x: 183, y: 166 },
    { x: 181, y: 163 },
    { x: 177, y: 161 },
    { x: 172, y: 161 },
    { x: 167, y: 161 },
    { x: 162, y: 163 },
    { x: 157, y: 167 },
    { x: 154, y: 171 },
    { x: 151, y: 176 },
    { x: 150, y: 180 },
    { x: 150, y: 186 },
    { x: 151, y: 191 },
    { x: 154, y: 195 },
    { x: 160, y: 199 },
    { x: 167, y: 203 },
    { x: 176, y: 205 },
    { x: 186, y: 205 },
    { x: 197, y: 206 },
    { x: 210, y: 205 },
    { x: 223, y: 202 },
    { x: 237, y: 196 },
    { x: 249, y: 189 },
    { x: 259, y: 181 },
    { x: 268, y: 172 },
    { x: 274, y: 161 },
    { x: 279, y: 150 },
    { x: 283, y: 140 },
    { x: 284, y: 133 },
    { x: 285, y: 127 },
    { x: 286, y: 125 },
    { x: 286, y: 124 },
    { x: 285, y: 124 },
    { x: 282, y: 125 },
    { x: 277, y: 127 },
    { x: 272, y: 130 },
    { x: 267, y: 135 },
    { x: 263, y: 139 },
    { x: 260, y: 145 },
    { x: 258, y: 151 },
    { x: 258, y: 156 },
    { x: 260, y: 163 },
    { x: 265, y: 169 },
    { x: 274, y: 173 },
    { x: 287, y: 175 },
    { x: 301, y: 175 },
    { x: 316, y: 170 },
    { x: 333, y: 157 },
    { x: 348, y: 139 },
    { x: 361, y: 122 },
    { x: 360, y: 122 },
    { x: 370, y: 105 },
    { x: 378, y: 91 },
    { x: 383, y: 81 },
    { x: 385, y: 75 },
    { x: 387, y: 72 },
    { x: 388, y: 71 },
    { x: 388, y: 70 },
    { x: 388, y: 70 },
    { x: 389, y: 70 },
    { x: 390, y: 70 },
    { x: 394, y: 70 },
    { x: 404, y: 72 },
    { x: 419, y: 76 },
    { x: 440, y: 85 },
    { x: 463, y: 96 },
    { x: 484, y: 108 },
    { x: 501, y: 119 },
    { x: 515, y: 130 },
    { x: 527, y: 141 },
    { x: 534, y: 153 },
    { x: 536, y: 167 },
    { x: 531, y: 184 },
    { x: 515, y: 208 },
    { x: 487, y: 241 },
    { x: 455, y: 275 },
    { x: 427, y: 304 },
    { x: 404, y: 330 },
    { x: 384, y: 352 },
    { x: 369, y: 368 },
    { x: 355, y: 381 },
    { x: 345, y: 388 },
    { x: 339, y: 392 },
    { x: 335, y: 394 },
    { x: 334, y: 394 },
    { x: 333, y: 394 },
    { x: 334, y: 393 },
    { x: 336, y: 391 },
    { x: 341, y: 389 },
    { x: 347, y: 389 },
    { x: 354, y: 391 },
    { x: 362, y: 397 },
    { x: 372, y: 406 },
    { x: 381, y: 416 },
    { x: 389, y: 424 },
    { x: 397, y: 430 },
    { x: 406, y: 433 },
    { x: 417, y: 434 },
    { x: 429, y: 429 },
    { x: 440, y: 421 },
    { x: 451, y: 411 },
    { x: 462, y: 403 },
    { x: 469, y: 398 },
    { x: 472, y: 396 },
    { x: 475, y: 395 },
    { x: 476, y: 394 },
    { x: 476, y: 394 },
    { x: 476, y: 394 },
    { x: 476, y: 394 },
    { x: 478, y: 393 },
    { x: 480, y: 389 },
    { x: 484, y: 385 },
    { x: 487, y: 380 },
    { x: 489, y: 377 },
    { x: 491, y: 375 },
    null,
    { x: 493, y: 376 },
    { x: 494, y: 382 },
    { x: 495, y: 392 },
    { x: 496, y: 403 },
    { x: 497, y: 412 },
    { x: 497, y: 417 },
    { x: 497, y: 419 },
    { x: 497, y: 420 },
    { x: 497, y: 419 },
    { x: 497, y: 417 },
    { x: 497, y: 415 },
    { x: 497, y: 414 },
    { x: 497, y: 414 },
    { x: 496, y: 417 },
    { x: 494, y: 421 },
    { x: 493, y: 425 },
    { x: 492, y: 427 },
    { x: 492, y: 428 },
    { x: 492, y: 428 },
    { x: 493, y: 427 },
    { x: 495, y: 425 },
    { x: 496, y: 421 },
    { x: 496, y: 419 },
    { x: 496, y: 417 },
    { x: 496, y: 417 },
    { x: 496, y: 418 },
    { x: 496, y: 418 },
  ];

  const genFunction = Utils.animateInitialData(ctx, data, "red");

  data.forEach(async (item, index) => {
    const { value } = genFunction.next();

    expect(value).toEqual(index);
  });

  expect(ctx.stroke).toHaveBeenCalledTimes(162);
  expect(ctx.lineTo).toHaveBeenCalledTimes(162);
  expect(ctx.beginPath).toHaveBeenCalledTimes(2);
  expect(ctx.moveTo).toHaveBeenCalledTimes(2);
});
