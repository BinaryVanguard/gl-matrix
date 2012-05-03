describe("vec2", function() {
  var vec, dest;
  var vecA, vecB, result;
  beforeEach(function() { vecA = [1, 2]; vecB = [3, 4]; dest = [0, 0]; });
  
  describe("when Float32Array is not supported", function() {
    beforeEach(function() { setMatrixArrayType(Array); });

    it("should initialize to 0", function() {
      vec = vec2.create();
      expect(vec[0]).toEqual(0);
      expect(vec[1]).toEqual(0);
    });
  });
  
  describe("cross", function() {
    describe("with dest given", function() {
      beforeEach(function() { result = vec2.cross(vecA, vecB, dest); });
      it("should store the cross in dest", function() { expect(dest).toBeEqualish([0, 0, -2]); });
      it("should return dest", function() { expect(result).toBe(dest); });
      it("should not alter vecA", function() { expect(vecA).toBeEqualish([1, 2]); });
      it("should not alter vecB", function() { expect(vecB).toBeEqualish([3, 4]); });
    });
    
    describe("with no dest given", function() {
      beforeEach(function() { result = vec2.cross(vecA, vecB); });
      it("should return the scalar Z value", function() { expect(result).toBeEqualish(-2); });
      it("should not alter vecA", function() { expect(vecA).toBeEqualish([1, 2]); });
      it("should not alter vecB", function() { expect(vecB).toBeEqualish([3, 4]); });
    });
  });
  
  describe("normalize", function() {
    describe("with dest given", function() {
      beforeEach(function() { result = vec2.normalize(vecA, dest); });
      it("should store normal in dest", function() { expect(dest).toBeEqualish([ 0.4472135954999579, 0.8944271909999159 ]); });
      it("should return dest", function() { expect(result).toBe(dest); });
      it("should not alter vecA", function() { expect(vecA).toBeEqualish([1, 2]); });
    });
    
    describe("with dest not given", function() {
      beforeEach(function() { result = vec2.normalize(vecA); });
      it("should store normal in vecA", function() { expect(vecA).toBeEqualish([ 0.4472135954999579, 0.8944271909999159 ]); });
      it("should return vecA", function() { expect(result).toBe(vecA); });
    });
  });
  
  describe("negate", function() {
    describe("with dest given", function() {
      beforeEach(function() { result = vec2.negate(vecA, dest); });
      it("should store negation in dest", function() { expect(dest).toBeEqualish([-1, -2]); });
      it("should return dest", function() { expect(result).toBe(dest); });
      it("should not alter vecA", function() { expect(vecA).toBeEqualish([1, 2]); });
    });
    
    describe("with dest not given", function() {
      beforeEach(function() { result = vec2.negate(vecA); });
      it("should return vecA", function() { expect(result).toBe(vecA); });
      it("should alter vecA", function() { expect(vecA).toBeEqualish([-1, -2]); });
    });
  });

  describe("set", function() {
    beforeEach(function() { result = vec2.set(vecA, dest); });
    it("should assign values", function() { expect(dest).toBeEqualish([1, 2]); });
    it("should return dest", function() { expect(result).toBe(dest); });
  });
  
  describe("dist", function() {
    beforeEach(function() { result = vec2.dist(vecA, vecB); });

    it("should return dest", function() { expect(result).toBeEqualish(2.828427); });
    it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2]); });
    it("should not modify vecB", function() { expect(vecB).toBeEqualish([3, 4]); });
  });
  
  describe("scale", function() {
    describe("with dest vec2", function() {
      beforeEach(function() { result = vec2.scale(vecA, 0.5, dest); });

      it("should place values into dest", function() { expect(dest).toBeEqualish([0.5, 1]); });
      it("should return dest", function() { expect(result).toBe(dest); });
      it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2]); });
    });
    
    describe("without dest vec2", function() {
      beforeEach(function() { result = vec2.scale(vecA, vecB); });

      it("should place values into vecA", function() { expect(vecA).toBeEqualish([0.5, 1]); });
    });
  });
  
  describe("add", function() {
    describe("with dest vec2", function() {
      beforeEach(function() { result = vec2.add(vecA, vecB, dest); });
      
      it("should place values into dest", function() { expect(dest).toBeEqualish([4, 6]); });
      it("should return dest", function() { expect(result).toBe(dest); });
      it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2]); });
      it("should not modify vecB", function() { expect(vecB).toBeEqualish([3, 4]); });
    });
    
    describe("without dest vec2", function() {
      beforeEach(function() { result = vec2.add(vecA, vecB); });
      
      it("should place values into vecB", function() { expect(vecB).toBeEqualish([4, 6]); });
      it("should return vecB", function() { expect(result).toBe(vecB); });
      it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2]); });
    });
  });
  
  describe("subtract", function() {
    describe("with dest vec2", function() {
      beforeEach(function() { result = vec2.subtract(vecA, vecB, dest); });
      
      it("should place values into dest", function() { expect(dest).toBeEqualish([-2, -2]); });
      it("should return dest", function() { expect(result).toBe(dest); });
      it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2]); });
      it("should not modify vecB", function() { expect(vecB).toBeEqualish([3, 4]); });
    });
    
    describe("without dest vec2", function() {
      beforeEach(function() { result = vec2.subtract(vecA, vecB); });
      
      it("should place values into vecB", function() { expect(vecB).toBeEqualish([-2, -2]); });
      it("should return vecB", function() { expect(result).toBe(vecB); });
      it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2]); });
    });
  });
  
  describe("multiply", function() {
    describe("with dest vec2", function() {
      beforeEach(function() { result = vec2.multiply(vecA, vecB, dest); });
      
      it("should place values into dest", function() { expect(dest).toBeEqualish([3, 8]); });
      it("should return dest", function() { expect(result).toBe(dest); });
      it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2]); });
      it("should not modify vecB", function() { expect(vecB).toBeEqualish([3, 4]); });
    });
    
    describe("without dest vec2", function() {
      beforeEach(function() { result = vec2.multiply(vecA, vecB); });
      
      it("should place values into vecB", function() { expect(vecB).toBeEqualish([3, 8]); });
      it("should return vecB", function() { expect(result).toBe(vecB); });
      it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2]); });
    });
  });
  
  describe("divide", function() {
    describe("with dest vec2", function() {
      beforeEach(function() { result = vec2.divide(vecA, vecB, dest); });
      
      it("should place values into dest", function() { expect(dest).toBeEqualish([0.333333, 0.5]); });
      it("should return dest", function() { expect(result).toBe(dest); });
      it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2]); });
      it("should not modify vecB", function() { expect(vecB).toBeEqualish([3, 4]); });
    });
    
    describe("without dest vec2", function() {
      beforeEach(function() { result = vec2.divide(vecA, vecB); });
      
      it("should place values into vecB", function() { expect(vecB).toBeEqualish([0.333333, 0.5]); });
      it("should return vecB", function() { expect(result).toBe(vecB); });
      it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2]); });
    });
  });
  
  describe("create", function() {
    describe("with vec", function() {
      it("should clone vec's contents", function() {
        expect(vec2.create([1, 2])).toBeEqualish([1, 2]);
      });
      
      it("should not return vec", function() {
        vec = [1, 2];
        expect(vec2.create(vec)).not.toBe(vec);
      });
    });
    
    describe("without vec", function() {
      it("should initialize components to 0", function() {
        expect(vec2.create()).toBeEqualish([0, 0]);
      });
    });
  });
});
