var Bezier = function (startPoint, control1, control2, endPoint) {
  this.startPoint = startPoint;
  this.control1 = control1;
  this.control2 = control2;
  this.endPoint = endPoint;

};

Bezier.prototype.length = function () {
  var steps = 10,
    length = 0,
    i, t, cx, cy, px, py, xdiff, ydiff;

  for (i = 0; i <= steps; i++) {
    t = i / steps;
    cx = this.point(t, this.startPoint.x, this.control1.x, this.control2.x, this.endPoint.x);
    cy = this.point(t, this.startPoint.y, this.control1.y, this.control2.y, this.endPoint.y);
    if (i > 0) {
      xdiff = cx - px;
      ydiff = cy - py;
      length += Math.sqrt(xdiff * xdiff + ydiff * ydiff);
    }
    px = cx;
    py = cy;
  }
  return length;
};

Bezier.prototype.point = function (t, start, c1, c2, end) {
    return          start * (1.0 - t) * (1.0 - t)  * (1.0 - t)
           + 3.0 *  c1    * (1.0 - t) * (1.0 - t)  * t
           + 3.0 *  c2    * (1.0 - t) * t          * t
           +        end   * t         * t          * t;
};


module.exports = Bezier;
